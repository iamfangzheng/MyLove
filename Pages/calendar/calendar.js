// Pages/calendar/calendar.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    liquid: [
      {
        title: "攻略|怎么爱你都不够呀"
      },
      {
        title: "1"
      },
      {
        title: "1"
      },
      {
        title: "1"
      },
      {
        title: "1"
      },
      {
        title: "1"
      },
      {
        title: "1"
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.request({
      url: app.serverUrl + '/login', // 仅为示例，并非真实的接口地址
      method: "POST",
      data: {
        username: 'zh',
        password: '123456'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {

      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  close: function () {
    wx.switchTab({
      url: '../../index/index',
    })
  }
})