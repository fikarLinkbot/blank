const openIdUrl = require('./config').openIdUrl;
const { checkToken, login } = require('./util/authHelper');

App({
  onLaunch: async function (args) {
    console.log('App Launch');
    console.log(args.query);

    // Check if auth token exists on first app load
    try {
      const token = await checkToken(); // Check for token in storage
      console.log('Auth Token:', token);
      // Set the globalData with token if it exists
      this.globalData.hasLogin = true;
      this.globalData.token = token;
    } catch (error) {
      console.error('Error during token check or login:', error);
      this.globalData.hasLogin = false;
    }
  },
  
  onShow: function (args) {
    console.log('App Show');
    console.log(args);
    console.log('-------------');
    
    // Check for gadget update
    let updateManager = tt.getUpdateManager();
    updateManager.onCheckForUpdate((result) => {
      console.log('Is there any update?：' + result.hasUpdate);
    });
    updateManager.onUpdateReady((result) => {
      tt.showModal({
        title: 'Update information',
        content: 'New version is ready, do you want to restart the app?',
        success: res => {
          console.log(JSON.stringify(res));
          if (res.confirm) {
            updateManager.applyUpdate();
          }
        }
      });
    });
    updateManager.onUpdateFailed((result) => {
      console.log('Gadget update failed');
    });
  },
  
  onHide: function () {
    console.log('App Hide');
  },
  
  globalData: {
    hasLogin: false,
    openid: null
  }
});