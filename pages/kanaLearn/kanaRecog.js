// pages/kanaLearn/kanaRecog.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:'',
    clear:'',
    currentNumber:1,
    totalNumber: 0,
    SSkana: [],
    correctNumber:0,
    Kana: [
      { kakiKata: 'あ', yomiKata: 'a' },
      { kakiKata: 'い', yomiKata: 'i' },
      { kakiKata: 'う', yomiKata: 'u' },
      { kakiKata: 'え', yomiKata: 'e' },
      { kakiKata: 'お', yomiKata: 'o' },
      { kakiKata: 'か', yomiKata: 'ka' },
      { kakiKata: 'き', yomiKata: 'ki' },
      { kakiKata: 'く', yomiKata: 'ku' },
      { kakiKata: 'け', yomiKata: 'ke' },
      { kakiKata: 'こ', yomiKata: 'ko' },
      { kakiKata: 'さ', yomiKata: 'sa' },
      { kakiKata: 'し', yomiKata: 'shi' },
      { kakiKata: 'す', yomiKata: 'su' },
      { kakiKata: 'せ', yomiKata: 'se' },
      { kakiKata: 'そ', yomiKata: 'so' },
      { kakiKata: 'た', yomiKata: 'ta' },
      { kakiKata: 'ち', yomiKata: 'chi' },
      { kakiKata: 'つ', yomiKata: 'tsu' },
      { kakiKata: 'て', yomiKata: 'te' },
      { kakiKata: 'と', yomiKata: 'to' },
      { kakiKata: 'な', yomiKata: 'na' },
      { kakiKata: 'に', yomiKata: 'ni' },
      { kakiKata: 'ぬ', yomiKata: 'nu' },
      { kakiKata: 'ね', yomiKata: 'ne' },
      { kakiKata: 'の', yomiKata: 'no' },
      { kakiKata: 'は', yomiKata: 'ha' },
      { kakiKata: 'ひ', yomiKata: 'hi' },
      { kakiKata: 'ふ', yomiKata: 'fu' },
      { kakiKata: 'へ', yomiKata: 'he' },
      { kakiKata: 'ほ', yomiKata: 'ho' },
      { kakiKata: 'ま', yomiKata: 'ma' },
      { kakiKata: 'み', yomiKata: 'mi' },
      { kakiKata: 'む', yomiKata: 'mu' },
      { kakiKata: 'め', yomiKata: 'me' },
      { kakiKata: 'も', yomiKata: 'mo' },
      { kakiKata: 'や', yomiKata: 'ya' },
      { kakiKata: 'ゆ', yomiKata: 'yu' },
      { kakiKata: 'よ', yomiKata: 'yo' },
      { kakiKata: 'ら', yomiKata: 'ra' },
      { kakiKata: 'り', yomiKata: 'ri' },
      { kakiKata: 'る', yomiKata: 'ru' },
      { kakiKata: 'れ', yomiKata: 're' },
      { kakiKata: 'ろ', yomiKata: 'ro' },
      { kakiKata: 'わ', yomiKata: 'wa' },
      { kakiKata: 'を', yomiKata: 'o' },
      { kakiKata: 'ん', yomiKata: 'n' },
      { kakiKata: 'ア', yomiKata: 'a' },
      { kakiKata: 'イ', yomiKata: 'i' },
      { kakiKata: 'ウ', yomiKata: 'u' },
      { kakiKata: 'エ', yomiKata: 'e' },
      { kakiKata: 'オ', yomiKata: 'o' },
      { kakiKata: 'カ', yomiKata: 'ka' },
      { kakiKata: 'キ', yomiKata: 'ki' },
      { kakiKata: 'ク', yomiKata: 'ku' },
      { kakiKata: 'ケ', yomiKata: 'ke' },
      { kakiKata: 'コ', yomiKata: 'ko' },
      { kakiKata: 'サ', yomiKata: 'sa' },
      { kakiKata: 'シ', yomiKata: 'shi' },
      { kakiKata: 'ス', yomiKata: 'su' },
      { kakiKata: 'セ', yomiKata: 'se' },
      { kakiKata: 'ソ', yomiKata: 'so' },
      { kakiKata: 'タ', yomiKata: 'ta' },
      { kakiKata: 'チ', yomiKata: 'chi' },
      { kakiKata: 'ツ', yomiKata: 'tsu' },
      { kakiKata: 'テ', yomiKata: 'te' },
      { kakiKata: 'ト', yomiKata: 'to' },
      { kakiKata: 'ナ', yomiKata: 'na' },
      { kakiKata: 'ニ', yomiKata: 'ni' },
      { kakiKata: 'ヌ', yomiKata: 'nu' },
      { kakiKata: 'ネ', yomiKata: 'ne' },
      { kakiKata: 'ノ', yomiKata: 'no' },
      { kakiKata: 'ハ', yomiKata: 'ha' },
      { kakiKata: 'ヒ', yomiKata: 'hi' },
      { kakiKata: 'フ', yomiKata: 'fu' },
      { kakiKata: 'ヘ', yomiKata: 'he' },
      { kakiKata: 'ホ', yomiKata: 'ho' },
      { kakiKata: 'マ', yomiKata: 'ma' },
      { kakiKata: 'ミ', yomiKata: 'mi' },
      { kakiKata: 'ム', yomiKata: 'mu' },
      { kakiKata: 'メ', yomiKata: 'me' },
      { kakiKata: 'モ', yomiKata: 'mo' },
      { kakiKata: 'ヤ', yomiKata: 'ya' },
      { kakiKata: 'ユ', yomiKata: 'yu' },
      { kakiKata: 'ヨ', yomiKata: 'yo' },
      { kakiKata: 'ラ', yomiKata: 'ra' },
      { kakiKata: 'リ', yomiKata: 'ri' },
      { kakiKata: 'ル', yomiKata: 'ru' },
      { kakiKata: 'レ', yomiKata: 're' },
      { kakiKata: 'ロ', yomiKata: 'ro' },
      { kakiKata: 'ワ', yomiKata: 'wa' },
      { kakiKata: 'ヲ', yomiKata: 'o' },
      { kakiKata: 'ン', yomiKata: 'n' },
    ]
    },

  //my function
  gotoSelect:function(){
  wx.redirectTo({
    url: '../kanaLearn/select',
  })
  },
  getKana:function(e){
    this.setData({ inputValue: e.detail.value}) 
  
  },

  formSubmit: function (e) {
   
    console.log('输入的读音为：', this.data.inputValue)
    console.log('正确读音为：', this.data.Kana[this.data.SSkana[this.data.currentNumber - 1]].yomiKata,)
    if (this.data.inputValue == '') {
      wx.showToast({
        title: '请输入读音！',
        icon: 'loading',
        duration: 1000
      })}
      else{
    if (this.data.inputValue == this.data.Kana[this.data.SSkana[this.data.currentNumber - 1]].yomiKata) {
      wx.showToast({
        title: '正确！',
        icon: 'success',
        duration: 1000
      })
      this.setData({correctNumber:(this.data.correctNumber+1)})
    }
    else {
      wx.showToast({
        title: '错误！',
        icon: 'none',
        duration: 1000,

      })
    }
    this.setData({clear:''})
    this.setData({ currentNumber: (this.data.currentNumber+1) })
    if(this.data.currentNumber>this.data.totalNumber){wx.redirectTo({
      url: '../kanaLearn/result?cN='+this.data.correctNumber,
    })}
      }
      this.setData({inputValue:''})
    return''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var changeOrder = app.globalData.selectedKana;
    var n = app.globalData.kanaNumber;
    var tmp,index,i;
    for(i=0;i<n;i++){
      index = Math.ceil(Math.random() * 200)%(n-i)+i;
      if(index!=i){
        tmp = changeOrder[i];
        changeOrder[i] = changeOrder[index];
        changeOrder[index]=tmp;
      }
    }
   

    this.setData({ totalNumber: app.globalData.kanaNumber })
    this.setData({ SSkana: changeOrder })

    console.log('洗牌前顺序：',app.globalData.selectedKana,'洗牌后顺序：',this.data.SSkana,'总数',this.data.totalNumber)
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
  
  }
})