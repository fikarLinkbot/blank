Page({
  data: {
    name: '',
    age: '',
    status: ''
  },
  onLoad: function (options) {
    this.setData({
      name: options.name,
      age: options.age,
      status: options.status
    });
  }
});
