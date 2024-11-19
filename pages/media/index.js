Page({
  data: {
    mediaType: '', // Jenis media: 'image' atau 'video'
    mediaPath: ''  // Path media yang dipilih
  },

  // Pilih Gambar
  selectImage() {
    tt.chooseImage({
      success: (res) => {
        this.setData({
          mediaType: 'image',
          mediaPath: res.tempFilePaths[0]
        });
        console.log('Image selected:', res.tempFilePaths[0]);
      },
      fail: (err) => {
        console.error('Failed to select image:', err);
      }
    });
  },

  // Pilih Video
  selectVideo() {
    tt.chooseVideo({
      success: (res) => {
        this.setData({
          mediaType: 'video',
          mediaPath: res.tempFilePath
        });
        console.log('Video selected:', res.tempFilePath);
      },
      fail: (err) => {
        console.error('Failed to select video:', err);
      }
    });
  },

  // Buka Kamera
  openCamera() {
    tt.chooseImage({
      sourceType: ['camera'],
      success: (res) => {
        this.setData({
          mediaType: 'image',
          mediaPath: res.tempFilePaths[0]
        });
        console.log('Image taken:', res.tempFilePaths[0]);
      },
      fail: (err) => {
        console.error('Failed to open camera:', err);
      }
    });
  }
});
