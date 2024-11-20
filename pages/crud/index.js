const { checkToken, login } = require('../../util/authHelper');
const app = getApp();

Page({
  data: {
    accessToken: '',
    accessTokenTimer: null,
    items: [],
  },
  onLoad: async function () {
    console.log('Checking Token');
    try {
      const token = await checkToken();
      this.setData({
        accessToken: token
      }, () => {
        this.getAllRecords();
        this.setAccessTokenRefresh();
      });
    } catch (error) {
      console.error('Failed to get access token:', error);
    }
  },
  onUnload: function(){
    clearInterval(this.data.accessTokenTimer)
  },
  onPullDownRefresh: function () {
    console.log('Pulling down for refresh...');

    // Show loading indicator
    tt.showLoading({ title: 'Refreshing...' });

    // Call the function to fetch data again
    this.getTotalProjectCompleted()
      .then(() => {
        // Stop the pull-down refresh animation after data is fetched
        tt.hideLoading();
        tt.stopPullDownRefresh();
      })
      .catch(error => {
        console.error('Error refreshing data:', error);
        tt.stopPullDownRefresh();  // Ensure to stop even if there's an error
      });
  },
  handleRelaodPage: function () {
    console.log('Refreshing page...');

    // Show loading indicator
    tt.showLoading({ title: 'Refreshing...' });

    // Call the function to fetch data again
    this.getTotalProjectCompleted()
    .then(() => {
      // Stop the pull-down refresh animation after data is fetched
      tt.hideLoading();
      tt.stopPullDownRefresh();
    })
    .catch(error => {
      console.error('Error refreshing data:', error);
      tt.stopPullDownRefresh();  // Ensure to stop even if there's an error
    });
  },
  setAccessTokenRefresh: function () {
    // Set an interval to refresh the access token every 2 hours
    this.setData({
      accessTokenTimer: setInterval(() => {
        this.refreshToken(); // Call refresh token function here if needed
      }, 7200 * 1000)
    });
  },
  getAllRecords: async function () {
    console.log('Access Token being used:', this.data.accessToken);

    try {
        tt.showLoading({ title: 'Loading...' }); // Show loading spinner
        const response = await this.makeRequest();  // Await the function that makes the request

        // 400 success means the token is there but it's expired
        if (response.statusCode === 400) {
            console.log('Token expired or invalid, attempting to re-login.');

            // Call login to get a new token
            const newToken = await login();  // Await the login process
            console.log('New token obtained:', newToken);

            // Update the access token and retry the request
            this.setData({
                accessToken: newToken
            });

            // Retry the request with the new token
            await this.getAllRecords();  // Recursively call the function to retry
        } else {
          const items = response.data?.data?.items || [];
          this.setData({ items });
          console.log('List of Items:', items); 
        }
    } catch (error) {
        console.error('API request failed:', error);
    } finally{
        tt.hideLoading();
    }
  },
  makeRequest: function () {
    return new Promise((resolve, reject) => {
        tt.request({
            url: 'https://open.larksuite.com/open-apis/bitable/v1/apps/LSllbGeopaMyccsqd6plxj7tgbd/tables/tbllakaQ3vcQywwE/records',
            header: {
                'content-type': 'application/json',
                'Authorization': `Bearer ${this.data.accessToken}`
            },
            method: "GET",
            success: (res) => {
                resolve(res);  // Resolve the promise with the result
            },
            fail: (error) => {
                reject(error);  // Reject the promise with the error
            }
        });
    });
  },
});
