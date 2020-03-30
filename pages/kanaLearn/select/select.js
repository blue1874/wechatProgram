// pages/kanaLearn/select1/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    recog: false,
    testKanaNumber: 10,
    //滑块状态值
    currentData: 0,
    //假名类型，hira表示平假名，kata表示片假名
    kanaType: ['hira', 'kata'],
    type: 'hira',
    isMenuOpen: false,
    sidebar_function: ["测试", ],
    first: true,
    //清音假名(seion/せいおん)
    seions: [],
    //浊音假名(dakuon/だくおん)
    dakuons: [],
    //拗音假名(youon/ようおん)
    yonos: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    const that = this;
    //请求kana数据
    wx.showLoading({
      title: '数据加载中',
    })
    wx.cloud.callFunction({
      name: 'inquire',
      data: {
        type: 'kana',
      }
    }).then(res => {
      wx.hideLoading();
      var kana = res.result.data;
      console.log("接受kana数据: ", kana[0]);
      that.setData({
        seions: kana[0].seions,
        dakuons: kana[0].dakuons,
        yonos: kana[0].yonos,
        type: this.data.kanaType[0],
      })
    })
  },

  gotoRecog: function() {
    
    var changeOrder = [];
    changeOrder = changeOrder.concat(this.data.seions, this.data.dakuons, this.data.yonos);
    console.log("kana arrays", changeOrder);
    var n = changeOrder.length;
    var tmp, index, i;
    var indexArray = [];
    for (i = 0; i < n; i++) {
      index = Math.ceil(Math.random() * 200) % (n - i) + i;
      if (index != i) {
        indexArray[i] = index;
        // tmp = changeOrder[i];
        // changeOrder[i] = changeOrder[index];
        // changeOrder[index] = tmp;
      }
    }

    var selectedKana = [];
    var j = 0, k = 0;
    while(j < this.data.testKanaNumber) {
      if(changeOrder[indexArray[k]].hiraName != "") {
        selectedKana = selectedKana.concat(changeOrder[indexArray[k]]);
        j++;
      }
      k++;
    }
    
    wx.navigateTo({
      url: '../kanaRecog/kanaRecog?selectedKana=' + JSON.stringify(selectedKana),
    })
  },

  openDialog: function() {
    this.setData({
      recog: true,
    })
  },

  closeDialog: function () {
    this.setData({
      recog: false,
    })
  },

  changeTestKanaNumber: function (e) {
    this.setData({
      testKanaNumber: e.detail.value,
    })
  },

  slideMenu: function(options) {
    const that = this;
    that.setData({
      isMenuOpen: that.data.isMenuOpen ? false : true,
      first: false,
    })
  },
  //获取当前滑块的index
  bindchange: function(e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },

  //点击切换，滑块index赋值
  checkCurrent: function(e) {
    const that = this;
    if (that.data.currentData == e.target.dataset.current) {
      return 0;
    } else {
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },

  changeHiraKata: function(e) {
    const that = this;
    that.setData({
      type: that.data.type == that.data.kanaType[0] ? that.data.kanaType[1] : that.data.kanaType[0]
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})