//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
    //初始化云数据库
    wx.cloud.init({
      env: "nihongo-data",
      traceUser: true,
    })
  },
  globalData: {
    userInfo: null,
    selectedKana:[],  //选择假名
    wrongKana:[],     //错误假名
    kanaNumber:0,     //假名个数
    chosenHKana: [],  //清音平假名
    chosenKKana: [],  //清音片假名
    chosenHDKana: [], //浊音平假名
    chosenHYKana: [], //拗音平假名
    chosenKDKana: [], //浊音片假名
    chosenKYKana: [], //拗音片假名
  }
})