// 获取应用实例
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    studentInfo: {
      name: '娜娜子',
      class: '5年级2班',
      avatar: '/images/avatar.png',
      growthValue: 89,
      badgeLevel: 1
    },
    modules: [
      {
        id: 'behavior',
        name: '行为基础',
        icon: '/images/brain-icon.png',
        color: 'behavior-icon'
      },
      {
        id: 'academic',
        name: '学业基础',
        icon: '/images/academic-icon.png',
        color: 'academic-icon'
      },
      {
        id: 'activity',
        name: '实践活动',
        icon: '/images/flag-icon.png',
        color: 'activity-icon'
      },
      {
        id: 'health',
        name: '体质健康',
        icon: '/images/health-icon.png',
        color: 'health-icon'
      },
      {
        id: 'interest',
        name: '兴趣爱好',
        icon: '/images/interest-icon.png',
        color: 'interest-icon'
      },
      {
        id: 'art',
        name: '艺术素养',
        icon: '/images/art-icon.png',
        color: 'art-icon'
      },
      {
        id: 'personal',
        name: '个性发展',
        icon: '/images/personal-icon.png',
        color: 'personal-icon'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 页面加载时可以获取学生信息
    this.loadStudentInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 页面渲染完成
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // 页面显示时可以刷新数据
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    // 下拉刷新
    this.loadStudentInfo()
    wx.stopPullDownRefresh()
  },

  /**
   * 加载学生信息
   */
  loadStudentInfo: function () {
    // 这里可以调用API获取学生信息
    // 示例数据已在data中定义
    console.log('加载学生信息')
  },

  /**
   * 导航到具体模块
   */
  navigateToModule: function (e) {
    const module = e.currentTarget.dataset.module
    console.log('导航到模块：', module)
    
    // 根据不同模块跳转到对应页面
    const modulePages = {
      behavior: '/pages/behavior/behavior',
      academic: '/pages/academic/academic',
      activity: '/pages/activity/activity',
      health: '/pages/health/health',
      interest: '/pages/interest/interest',
      art: '/pages/art/art',
      personal: '/pages/personal/personal'
    }

    const targetPage = modulePages[module]
    if (targetPage) {
      wx.navigateTo({
        url: targetPage,
        success: function () {
          console.log('跳转成功')
        },
        fail: function (err) {
          console.error('跳转失败：', err)
          // 如果页面不存在，可以显示提示
          wx.showToast({
            title: '页面开发中...',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
  },

  /**
   * 搜索功能
   */
  onSearchTap: function () {
    console.log('点击搜索')
    wx.showToast({
      title: '搜索功能开发中...',
      icon: 'none',
      duration: 2000
    })
  },

  /**
   * 底部导航点击事件
   */
  onNavTap: function (e) {
    const navType = e.currentTarget.dataset.nav
    console.log('导航点击：', navType)
    
    // 这里可以处理底部导航的跳转逻辑
    switch (navType) {
      case 'home':
        // 当前页面，不需要跳转
        break
      case 'chat':
        // 跳转到聊天页面
        wx.showToast({
          title: '聊天功能开发中...',
          icon: 'none'
        })
        break
      case 'planet':
        // 跳转到星球页面
        wx.showToast({
          title: '星球功能开发中...',
          icon: 'none'
        })
        break
      case 'profile':
        // 跳转到个人页面
        wx.showToast({
          title: '个人中心开发中...',
          icon: 'none'
        })
        break
    }
  }
})