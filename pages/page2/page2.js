const { getAuthToken } = require('../../util/authHelper');

const tokenData = getAuthToken();
const tokenValue = JSON.parse(tokenData).token;

const getAllRecords = async () => {
  return new Promise((resolve, reject) => {
    tt.request({
      url: "https://open.larksuite.com/open-apis/bitable/v1/apps/LSllbGeopaMyccsqd6plxj7tgbd/tables/tbllakaQ3vcQywwE/records",
      header: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + tokenValue // Add a space after 'Bearer'
      },
      method: 'GET',
      success: (res) => {
        console.log('res', res);
        resolve(res); // Resolve with the response data
      },
      fail: (error) => {
        console.error('Request failed:', JSON.stringify(error));
        reject('Request failed: ' + JSON.stringify(error));
      }
    });
  });
};

Page({
  data: {
    items: [],
  },

  onLoad: async function () {
    console.log('This is page 2, token:', tokenValue);

    try {
      const records = await getAllRecords();
      const items = records.data?.data?.items || [];
      this.setData({ items }); // Set the items data to display in the .ttml
      console.log('List of Items:', items); // Log the result of getAllRecords
    } catch (error) {
      console.error('Error page 2:', error);
    }
  },
});
