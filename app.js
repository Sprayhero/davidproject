// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('登录成功', res)
      }
    })
  },
  
  onShow() {
    // 获取系统信息
    wx.getSystemInfo({
      success: res => {
        this.globalData.systemInfo = res
      }
    })
  },

  globalData: {
    userInfo: null,
    systemInfo: null
  }
})