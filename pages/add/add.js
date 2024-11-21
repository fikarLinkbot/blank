const app = getApp();

const createRecord = async (token, newRecordData) => {
  return new Promise((resolve, reject) => {
    tt.request({
      url: "https://open.larksuite.com/open-apis/bitable/v1/apps/LSllbGeopaMyccsqd6plxj7tgbd/tables/tbllakaQ3vcQywwE/records",
      header: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      method: 'POST',
      data: {
        fields: newRecordData,
      },
      success: (res) => {
        console.log('Record created:', res);
        resolve(res);
      },
      fail: (error) => {
        console.error('Failed to create record:', JSON.stringify(error));
        reject('Failed to create record: ' + JSON.stringify(error));
      }
    });
  });
};

Page({
  data: {
    accessToken: '',
    name: '',
    age: '',
    status: '',
  },

  onLoad: function (options) {
    this.setData({
      accessToken: options.accessToken || '',
    });
  },

  onNameInput: function (e) {
    this.setData({ name: e.detail.value });
  },

  onAgeInput: function (e) {
    this.setData({ age: e.detail.value });
  },

  onStatusInput: function (e) {
    this.setData({ status: e.detail.value });
  },

  submitForm: async function () {
    const app = getApp();
    const { name, age, status, accessToken } = this.data;

    // Validasi input
    if (!name || !age || !status) {
      tt.showToast({
        title: 'All fields are required',
        icon: 'none'
      });
      return;
    }

    try {
      const newRecordData = { Name: name, Age: Number(age), Status: status };

      await createRecord(accessToken, newRecordData);
      tt.showToast({
        title: 'Record added successfully',
        icon: 'success'
      });

      // Navigasi kembali ke halaman utama atau halaman lain
      tt.navigateBack();
    } catch (error) {
      console.error('Failed to add record:', error);
      tt.showToast({
        title: 'Failed to add record',
        icon: 'none'
      });
    }
  }
});
