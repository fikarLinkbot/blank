const app = getApp();

const editRecord = async (token, newRecordData, recordId) => {
  return new Promise((resolve, reject) => {
    tt.request({
      url: `https://open.larksuite.com/open-apis/bitable/v1/apps/LSllbGeopaMyccsqd6plxj7tgbd/tables/tbllakaQ3vcQywwE/records/${recordId}`,
      header: {
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + token,
      },
      method: 'PUT',
      data: {
        fields: newRecordData,
      },
      success: (res) => {
        console.log('Record Updated:', res);
        resolve(res);
      },
      fail: (error) => {
        console.error('Failed to updated record:', JSON.stringify(error));
        reject('Failed to updated record: ' + JSON.stringify(error));
      }
    });
  });
};

const deleteRecord = async (token, recordId) => {
  return new Promise((resolve, reject) => {
    tt.request({
      url: `https://open.larksuite.com/open-apis/bitable/v1/apps/LSllbGeopaMyccsqd6plxj7tgbd/tables/tbllakaQ3vcQywwE/records/${recordId}`,
      header: {
        'Authorization': 'Bearer ' + token,
      },
      method: 'DELETE',
      
      success: (res) => {
        console.log('Record Deleted:', res);
        console.log('recordId:', recordId);
        resolve(res);
      },
      fail: (error) => {
        console.error('Failed to deleted record:', JSON.stringify(error));
        reject('Failed to deleted record: ' + JSON.stringify(error));
      }
    });
  });
};

Page({
  data: {
    name: '',
    age: '',
    status: '',
    recordId: ''
  },
  onLoad: function (options) {
    this.setData({
      name: options.name || '',
      age: options.age || '',
      status: options.status || '',
      recordId: options.recordId || '',
    });
  },

  onInputChange: function (e) {
    const field = e.currentTarget.dataset.field;
    this.setData({
      [field]: e.detail.value
    });
  },

  handleEdit: async function () {
    const app = getApp();
    const { name, age, status, recordId } = this.data;

    // Validasi input
    if (!name || !age || !status) {
      tt.showToast({
        title: 'All fields are required',
        icon: 'none'
      });
      return;
    }

    try {
      const token = JSON.parse(app.globalData.token).token;
      const newRecordData = { Name: name, Age: Number(age), Status: status};

      await editRecord(token, newRecordData, recordId);
      tt.showToast({
        title: 'Record updated successfully',
        icon: 'success'
      });

      // Navigasi kembali ke halaman utama atau halaman lain
      tt.navigateBack();
    } catch (error) {
      console.error('Failed to updated record:', error);
      tt.showToast({
        title: 'Failed to updated record',
        icon: 'none'
      });
    }
  },

  handleDelete: async function () {
    const app = getApp();
    const { name, age, status, recordId } = this.data;

    try {
      const token = JSON.parse(app.globalData.token).token;

      await deleteRecord(token, recordId);
      tt.showToast({
        title: 'Record deleted successfully',
        icon: 'success'
      });

      tt.navigateBack();
    } catch (error) {
      console.error('Failed to deleted record:', error);
      tt.showToast({
        title: 'Failed to deleted record',
        icon: 'none'
      });
    }
  },
});
