const { openIdUrl, appId, appSecret } = require('../config');

// Retrieve the token from local storage
const getAuthToken = () => {
  let result = tt.getStorageSync("authToken");
  console.log(`Retrieved token: ${result ? result : 'No token found'}`);
  return result;
};

// Save the token to local storage
const saveAuthToken = (token) => {
  console.log("Saving token...");

  const tokenData = {
    token
  };

  tt.setStorageSync('authToken', JSON.stringify(tokenData));  // Save
  console.log('Token successfully saved');
};

// Function to handle login and token retrieval
const login = async () => {
  return new Promise((resolve, reject) => {
    tt.request({
      url: openIdUrl,
      header: {
        'content-type': 'application/json'
      },
      method: 'POST',
      // Update the request payload to match the original structure
      data: { 
        app_id: appId,  // Use app_id instead of appId
        app_secret: appSecret  // Use app_secret instead of appSecret
      },
      success: (res) => {
        console.log('Token request response:', res);  // Log the response
        if (res.statusCode === 200 && res.data.tenant_access_token) {
          console.log('Token successfully received:', res.data.tenant_access_token);
          
          saveAuthToken(res.data.tenant_access_token);  // Save the token to local storage

          resolve(res.data.tenant_access_token);  // Resolve with the token
        } else {
          console.error('Login failed with response:', res);
          reject('Login failed: ' + (res.data.message || 'No token returned'));
        }
      },
      fail: (error) => {
        console.error('Request failed:', JSON.stringify(error));  // Log the full error object
        reject('Request failed: ' + JSON.stringify(error));  // Reject with full error details
      }
    });
  });
};


// Function to check for the token, and log in if not found
const checkToken = async () => {
  console.log("Checking for existing token...");
  const token = getAuthToken();  // Retrieve the token
  if (!token) {
    console.log("No token found, logging in...");
    // If no token is found, log in and get a new token
    return await login();
  }
  console.log("Token found:", token);
  // If token exists, return it
  return token;
};

module.exports = {
  checkToken,
  login,
  getAuthToken
};