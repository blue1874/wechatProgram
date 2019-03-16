// pages/kanaLearn/select.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    chosenHKana:[],
    chosenKKana:[],
    state:false,
    hira_select_all:false,
    kata_select_all:false,
    num: 0,
    kanas: [
      { name: 'あ', value: 0 },
      { name: 'い', value: 1 },
      { name: 'う', value: 2 },
      { name: 'え', value: 3 },
      { name: 'お', value: 4 },
      { name: 'か', value: 5 },
      { name: 'き', value: 6 },
      { name: 'く', value: 7 },
      { name: 'け', value: 8 },
      { name: 'こ', value: 9 }, 
      { name: 'さ', value: 10 },
      { name: 'し', value: 11 },
      { name: 'す', value: 12 },
      { name: 'せ', value: 13 },
      { name: 'そ', value: 14 },
      { name: 'た', value: 15 },
      { name: 'ち', value: 16 },
      { name: 'つ', value: 17 },
      { name: 'て', value: 18 },
      { name: 'と', value: 19 },
      { name: 'な', value: 20 },
      { name: 'に', value: 21 },
      { name: 'ぬ', value: 22 },
      { name: 'ね', value: 23 },
      { name: 'の', value: 24 },
      { name: 'は', value: 25 },
      { name: 'ひ', value: 26 },
      { name: 'ふ', value: 27 },
      { name: 'へ', value: 28 },
      { name: 'ほ', value: 29 }, 
      { name: 'ま', value: 30 },
      { name: 'み', value: 31 },
      { name: 'む', value: 32 },
      { name: 'め', value: 33 },
      { name: 'も', value: 34 },
      { name: 'や', value: 35 },
      { name: 'ゆ', value: 36 },
      { name: 'よ', value: 37 },
      { name: 'ら', value: 38 },
      { name: 'り', value: 39 }, 
      { name: 'る', value: 40 },
      { name: 'れ', value: 41 },
      { name: 'ろ', value: 42 },
      { name: 'わ', value: 43 },
      { name: 'を', value: 44 },
      { name: 'ん', value: 45 },
      { name: 'ア', value: 46 },
      { name: 'イ', value: 47 },
      { name: 'ウ', value: 48 },
      { name: 'エ', value: 49 }, 
      { name: 'オ', value: 50 },
      { name: 'カ', value: 51 },
      { name: 'キ', value: 52 },
      { name: 'ク', value: 53 },
      { name: 'ケ', value: 54 },
      { name: 'コ', value: 55 },
      { name: 'サ', value: 56 },
      { name: 'シ', value: 57 },
      { name: 'ス', value: 58 },
      { name: 'セ', value: 59 }, 
      { name: 'ソ', value: 60 },
      { name: 'タ', value: 61 },
      { name: 'チ', value: 62 },
      { name: 'ツ', value: 63 },
      { name: 'テ', value: 64 },
      { name: 'ト', value: 65 },
      { name: 'ナ', value: 66 },
      { name: 'ニ', value: 67 },
      { name: 'ヌ', value: 68 },
      { name: 'ネ', value: 69 }, 
      { name: 'ノ', value: 70 },
      { name: 'ハ', value: 71 },
      { name: 'ヒ', value: 72 },
      { name: 'フ', value: 73 },
      { name: 'ヘ', value: 74 },
      { name: 'ホ', value: 75 },
      { name: 'マ', value: 76 },
      { name: 'ミ', value: 77 },
      { name: 'ム', value: 78 },
      { name: 'メ', value: 79 }, 
      { name: 'モ', value: 80 },
      { name: 'ヤ', value: 81 },
      { name: 'ユ', value: 82 },
      { name: 'ヨ', value: 83 },
      { name: 'ラ', value: 84 },
      { name: 'リ', value: 85 },
      { name: 'ル', value: 86 },
      { name: 'レ', value: 87 },
      { name: 'ロ', value: 88 },
      { name: 'ワ', value: 89 }, 
      { name: 'ヲ', value: 90 },
      { name: 'ン', value: 91 },

    ]
  
  },

  //my functions
  hiraSelectAll: function () {//平假全选与反全选
    var that = this;
    for (let i = 0; i < (that.data.kanas.length/2); i++) {
      that.data.kanas[i].checked = (!that.data.hira_select_all)
    }
    that.setData({
      kanas: that.data.kanas,
      hira_select_all: (!that.data.hira_select_all)
    })
    if(this.data.hira_select_all==true){
    this.setData({ chosenHKana: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"] })
      }
      else{this.setData({chosenHKana:[]})}
    app.globalData.selectedKana = this.data.chosenHKana.concat(this.data.chosenKKana),

     

    app.globalData.kanaNumber = app.globalData.selectedKana.length,
      console.log('全局变量selectedKana修改为：', app.globalData.selectedKana)
      console.log( '全局变量kanaNumber修改为：', app.globalData.kanaNumber)
  
    if (app.globalData.selectedKana.length > 0) this.setData({ state: true })
    else this.setData({ state: false })
  },
  kataSelectAll: function () {  //片假全选与反全选
    var that = this;
    for (let i = 46; i < (that.data.kanas.length); i++) {
      that.data.kanas[i].checked = (!that.data.kata_select_all)
    }
    that.setData({
      kanas: that.data.kanas,
      kata_select_all: (!that.data.kata_select_all)
    })
    if (this.data.kata_select_all == true) {
      this.setData({ chosenKKana: ["46", "47", "48", "49", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90", "91"] })
    }
    else { this.setData({ chosenKKana: [] }) }
    app.globalData.selectedKana = this.data.chosenHKana.concat(this.data.chosenKKana),



    app.globalData.kanaNumber = app.globalData.selectedKana.length,
      console.log('全局变量selectedKana修改为：', app.globalData.selectedKana)
    console.log('全局变量kanaNumber修改为：', app.globalData.kanaNumber)

    if (app.globalData.selectedKana.length > 0) this.setData({ state: true })
    else this.setData({ state: false })

  },
  gotoMenu:function(){//返回主菜单
  wx.redirectTo({
    url: '../menu/menu',
  })
  },
  beginRecog: function (e) {

    wx.redirectTo({

      url: '../kanaLearn/kanaRecog'
    })

  },
  checkboxChange_hira: function (e) { //平假名组点选事件

    this.setData({ chosenHKana: e.detail.value })
    app.globalData.selectedKana = this.data.chosenHKana.concat(this.data.chosenKKana),
     console.log('value值为',e.detail.value)
    //this.setData({ len: app.globalData.selectedKana.length })
    app.globalData.kanaNumber = app.globalData.selectedKana.length,
      console.log('全局变量selectedKana修改为：', app.globalData.selectedKana,'全局变量kanaNumber修改为：', app.globalData.kanaNumber)

    if (app.globalData.selectedKana.length > 0) this.setData({ state: true })
    else  this.setData({ state: false })
  },
  checkboxChange_kata: function (e) {  //片假名组点选事件
    this.setData({ chosenKKana: e.detail.value })
    app.globalData.selectedKana = this.data.chosenHKana.concat(this.data.chosenKKana),
      console.log('value值为', e.detail.value)
    //this.setData({ len: app.globalData.selectedKana.length })
    app.globalData.kanaNumber = app.globalData.selectedKana.length,
      console.log('全局变量selectedKana修改为：', app.globalData.selectedKana, '全局变量kanaNumber修改为：', app.globalData.kanaNumber)

    if (app.globalData.selectedKana.length > 0) this.setData({ state: true })
    else this.setData({ state: false })
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
})