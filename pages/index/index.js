Page({
  data: {
    message: 'Hello World',
    isShowMessage: false,
  },
  showMessage() {
    this.setData({
      isShowMessage: true,
    })
  },
  onLoad: function () {
    console.log(token)
  },
})
