const app = getApp();

const getAllRecords = async (token) => {
  try {
    return new Promise((resolve, reject) => {
      tt.request({
        url: "https://open.larksuite.com/open-apis/bitable/v1/apps/LSllbGeopaMyccsqd6plxj7tgbd/tables/tbllakaQ3vcQywwE/records",
        header: {
          'content-type': 'application/json',
          'Authorization': 'Bearer ' + token,
        },
        method: 'GET',
        success: (res) => {
          console.log('Fetched records:', res);
          resolve(res); // Resolve with the response data
        },
        fail: (error) => {
          console.error('Request failed:', JSON.stringify(error));
          reject('Request failed: ' + JSON.stringify(error));
        }
      });
    });
  } catch (error) {
    console.error('Error while fetching records:', error);
    throw error;
  }
};

Page({
  data: {
    token: '', 
    items: [],
  },

  onLoad: async function () {
    try {
      // Parse the token from globalData and save it to data
      const parsedToken = JSON.parse(app.globalData.token).token;
      this.setData({ token: parsedToken });
      console.log('Parsed Token:', parsedToken);

      // Fetch records on load
      await this.fetchRecords(parsedToken);
    } catch (error) {
      console.error('Error in onLoad:', error);
    }
  },

  onShow: function () {
    // Refresh data setiap kali halaman muncul kembali
    if (this.data.token) {
      this.fetchRecords(this.data.token);
    }
  },

  fetchRecords: async function (token) {
    try {
      const records = await getAllRecords(token);
      const items = records.data?.data?.items || [];
      this.setData({ items });
      console.log('List of Items:', items);
    } catch (error) {
      console.error('Failed to fetch records:', error);
    }
  },
});
