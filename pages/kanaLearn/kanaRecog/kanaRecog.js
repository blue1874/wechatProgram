// pages/kanaLearn/kanaRecog.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    wrongFlag:false,
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
      { kakiKata: 'を', yomiKata: 'o', yomiKata_2: 'wo'},
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
      { kakiKata: 'ヲ', yomiKata: 'o', yomiKata_2: 'wo'},
      { kakiKata: 'ン', yomiKata: 'n' },
      { kakiKata: 'ガ', yomiKata: 'ga' },
      { kakiKata: 'ギ', yomiKata: 'gi' },
      { kakiKata: 'グ', yomiKata: 'gu' },
      { kakiKata: 'ゲ', yomiKata: 'ge' },
      { kakiKata: 'ゴ', yomiKata: 'go' },
      { kakiKata: 'ザ', yomiKata: 'za' },
      { kakiKata: 'ジ', yomiKata: 'ji' },
      { kakiKata: 'ズ', yomiKata: 'zu' },
      { kakiKata: 'ゼ', yomiKata: 'ze' },
      { kakiKata: 'ゾ', yomiKata: 'zo' },
      { kakiKata: 'だ', yomiKata: 'da' },
      { kakiKata: 'ぢ', yomiKata: 'di' },
      { kakiKata: 'づ', yomiKata: 'du' },
      { kakiKata: 'で', yomiKata: 'de' },
      { kakiKata: 'ど', yomiKata: 'do' },
      { kakiKata: 'ば', yomiKata: 'ba' },
      { kakiKata: 'び', yomiKata: 'bi' },
      { kakiKata: 'ぶ', yomiKata: 'bu' },
      { kakiKata: 'べ', yomiKata: 'be' },
      { kakiKata: 'ぼ', yomiKata: 'bo' },
      { kakiKata: 'ぱ', yomiKata: 'pa' },
      { kakiKata: 'ぴ', yomiKata: 'pi' },
      { kakiKata: 'ぷ', yomiKata: 'pu' },
      { kakiKata: 'ぺ', yomiKata: 'pe' },
      { kakiKata: 'ぽ', yomiKata: 'po' },
      { kakiKata: 'きゃ', yomiKata: 'kya' },
      { kakiKata: 'きゅ', yomiKata: 'kyu' },
      { kakiKata: 'きょ', yomiKata: 'kyo' },
      { kakiKata: 'しゃ', yomiKata: 'sha' },
      { kakiKata: 'しゅ', yomiKata: 'shu' },
      { kakiKata: 'しょ', yomiKata: 'sho' },
      { kakiKata: 'ちゃ', yomiKata: 'cha' },
      { kakiKata: 'ちゅ', yomiKata: 'chu' },
      { kakiKata: 'ちょ', yomiKata: 'cho' },
      { kakiKata: 'にゃ', yomiKata: 'nya' },
      { kakiKata: 'にゅ', yomiKata: 'nyu' },
      { kakiKata: 'にょ', yomiKata: 'nyo' },
      { kakiKata: 'ひゃ', yomiKata: 'hya' },
      { kakiKata: 'ひゅ', yomiKata: 'hyu' },
      { kakiKata: 'ひょ', yomiKata: 'hyo' },
      { kakiKata: 'みゃ', yomiKata: 'mya' },
      { kakiKata: 'みゅ', yomiKata: 'myu' },
      { kakiKata: 'みょ', yomiKata: 'myo' },
      { kakiKata: 'りあ', yomiKata: 'rya' },
      { kakiKata: 'りゅ', yomiKata: 'ryu' },
      { kakiKata: 'りょ', yomiKata: 'ryo' },
      { kakiKata: 'ぎゃ', yomiKata: 'gya' },
      { kakiKata: 'ぎゅ', yomiKata: 'gyu' },
      { kakiKata: 'ぎょ', yomiKata: 'gyo' },
      { kakiKata: 'じゃ', yomiKata: 'ja' },
      { kakiKata: 'じゅ', yomiKata: 'ju' },
      { kakiKata: 'じょ', yomiKata: 'jo' },
      { kakiKata: 'びゃ', yomiKata: 'bya' },
      { kakiKata: 'びゅ', yomiKata: 'byu' },
      { kakiKata: 'びょ', yomiKata: 'byo' },
      { kakiKata: 'ぴゃ', yomiKata: 'pya' },
      { kakiKata: 'ぴゅ', yomiKata: 'pyu' },
      { kakiKata: 'ぴょ', yomiKata: 'pyo' },
      { kakiKata: 'ガ', yomiKata: 'ga' },
      { kakiKata: 'ギ', yomiKata: 'gi' },
      { kakiKata: 'グ', yomiKata: 'gu' },
      { kakiKata: 'ゲ', yomiKata: 'ge' },
      { kakiKata: 'ゴ', yomiKata: 'go' },
      { kakiKata: 'ザ', yomiKata: 'za' },
      { kakiKata: 'ジ', yomiKata: 'ji' },
      { kakiKata: 'ズ', yomiKata: 'zu' },
      { kakiKata: 'ゼ', yomiKata: 'ze' },
      { kakiKata: 'ゾ', yomiKata: 'zo' },
      { kakiKata: 'ダ', yomiKata: 'da' },
      { kakiKata: 'ヂ', yomiKata: 'ji' },
      { kakiKata: 'ヅ', yomiKata: 'zu' },
      { kakiKata: 'デ', yomiKata: 'de' },
      { kakiKata: 'ド', yomiKata: 'do' },
      { kakiKata: 'バ', yomiKata: 'ba' },
      { kakiKata: 'ビ', yomiKata: 'bi' },
      { kakiKata: 'ブ', yomiKata: 'bu' },
      { kakiKata: 'ベ', yomiKata: 'be' },
      { kakiKata: 'ボ', yomiKata: 'bo' },
      { kakiKata: 'パ', yomiKata: 'pa' },
      { kakiKata: 'ピ', yomiKata: 'pi' },
      { kakiKata: 'プ', yomiKata: 'pu' },
      { kakiKata: 'ペ', yomiKata: 'pe' },
      { kakiKata: 'ポ', yomiKata: 'po' },
      { kakiKata: 'キャ', yomiKata: 'kya' },
      { kakiKata: 'キュ', yomiKata: 'kyu' },
      { kakiKata: 'キョ', yomiKata: 'kyo' },
      { kakiKata: 'シャ', yomiKata: 'sha' },
      { kakiKata: 'シュ', yomiKata: 'shu' },
      { kakiKata: 'ショ', yomiKata: 'sho' },
      { kakiKata: 'チャ', yomiKata: 'cha' },
      { kakiKata: 'チュ', yomiKata: 'chu' },
      { kakiKata: 'チョ', yomiKata: 'cho' },
      { kakiKata: 'ニャ', yomiKata: 'nya' },
      { kakiKata: 'ニュ', yomiKata: 'nyu' },
      { kakiKata: 'ニョ', yomiKata: 'nyo' },
      { kakiKata: 'ヒャ', yomiKata: 'hya' },
      { kakiKata: 'ヒュ', yomiKata: 'hyu' },
      { kakiKata: 'ヒョ', yomiKata: 'hyo' },
      { kakiKata: 'ミャ', yomiKata: 'mya' },
      { kakiKata: 'ミュ', yomiKata: 'myu' },
      { kakiKata: 'ミョ', yomiKata: 'myo' },
      { kakiKata: 'リャ', yomiKata: 'rya' },
      { kakiKata: 'リュ', yomiKata: 'ryu' },
      { kakiKata: 'リョ', yomiKata: 'ryo' },
      { kakiKata: 'ギャ', yomiKata: 'gya' },
      { kakiKata: 'ギュ', yomiKata: 'gyu' },
      { kakiKata: 'ギョ', yomiKata: 'gyo' },
      { kakiKata: 'ジャ', yomiKata: 'jya' },
      { kakiKata: 'ジュ', yomiKata: 'jyu' },
      { kakiKata: 'ジョ', yomiKata: 'jyo' },
      { kakiKata: 'ビャ', yomiKata: 'bya' },
      { kakiKata: 'ビュ', yomiKata: 'byu' },
      { kakiKata: 'ビョ', yomiKata: 'byo' },
      { kakiKata: 'ピャ', yomiKata: 'pya' },
      { kakiKata: 'ピュ', yomiKata: 'pyu' },
      { kakiKata: 'ピョ', yomiKata: 'pyo' },

    ],
    },

  //my function
  //返回选择界面
  gotoSelect:function(){
  wx.navigateTo({
    url: '../../kanaLearn/select/select',
  })
  },
  //记录输入的值
  getKana:function(e){
    this.setData({ inputValue: e.detail.value}) 
  
  },
  //点击提交或小键盘的确定按钮事件
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
      if ((this.data.inputValue == this.data.Kana[this.data.SSkana[this.data.currentNumber - 1]].yomiKata) || (this.data.inputValue ==this.data.Kana[this.data.SSkana[this.data.currentNumber - 1]].yomiKata_2) )
      {
      wx.showToast({
        title: '正确！',
        icon: 'success',
        duration: 1000
      })
      this.setData({correctNumber:(this.data.correctNumber+1)})
        this.setData({ currentNumber: (this.data.currentNumber + 1) })
    }
    else {
        this.setData({ wrongFlag: true })
      app.globalData.wrongKana = app.globalData.wrongKana.concat(this.data.SSkana[this.data.currentNumber - 1])
      console.log("wrongKana has been changed to", app.globalData.wrongKana)
    }
    this.setData({clear:''})
    
    if(this.data.currentNumber>this.data.totalNumber){wx.navigateTo({
      url: '../result/result?cN='+this.data.correctNumber,
    })}
      }
      this.setData({inputValue:''})
    return''
  },
  wrongComfirm:function(){
    this.setData({ wrongFlag: false })
    this.setData({ currentNumber: (this.data.currentNumber + 1) })
    if (this.data.currentNumber > this.data.totalNumber) {
      wx.navigateTo({
        url: '../result/result?cN=' + this.data.correctNumber,
      })
    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  //接受选择好的数组，并且洗牌
  onLoad: function (options) {
    console.log('洗牌前顺序：', app.globalData.selectedKana)
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

    console.log('洗牌后顺序：',this.data.SSkana,'总数',this.data.totalNumber)
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