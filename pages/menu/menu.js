// pages/menu/menu.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: [false, false, false, false],
    chapter: [{
      name: "小李赴日",
      section: [{ index: 1, name: "李さんは　中国人です" }, { index: 2, name: "これわ　本です" }, { index: 3, name: "ここは　デパートです" }, { index: 4, name:"部屋に　机といすが　あります"}],
    },
    {
      name: "小李的公司生活",
      section: [{ index: 5, name: "森さんは　七時に　起きます"}, { index: 6, name: "吉田さんは　来月　中国へ　行きます"},{ index: 7, name: "李さんは　毎日　コーヒーを　飲みます"},{ index: 8, name: "李さんは　日本語で　手紙を　書きます"}]
    }],
  },
  //my funtions
  disable: function()
  {
    wx.showToast({
      title: '该内容尚未上线',
      icon: 'loading',
      duration: 1000
    })
  },

  setActive: function(e)
  {
    const that = this;
    var id = e.target.dataset.id;
    var active = that.data.active;
    for(var i = 0; i < active.length; i++)
    {
      if(i == id) active[i] = active[i] ? false : true;
      else active[i] = false; 
    }
    that.setData({
      active: active
    })
  },

  back:function()
  {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  
  gotoKanaLearn:function()
  {
    wx.navigateTo({
      url: '../kanaLearn/select/select',
      })
  },
  //传递section参数到select页面
  gotoSelect:function(e)
  {
    var index = e.target.dataset.index;
    wx.navigateTo({
      url: '../context/select/select?section=' + index,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options)
  {},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () 
  {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () 
  {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () 
  {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () 
  {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () 
  {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () 
  {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () 
  {}
})