// pages/kanaLearn/result.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wrongKanaInOrder:[],
    wrongLength:0,
    correctNumber:0,
    totalNumber:0,
    percentage:0,
    wrongFlag:true,
    foldState:true,
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
      { kakiKata: 'を', yomiKata: 'o', yomiKata_2: 'wo' },
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
      { kakiKata: 'ヲ', yomiKata: 'o', yomiKata_2: 'wo' },
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
      { kakiKata: 'しゃ', yomiKata: 'sha', yomiKata_2: 'sya' },
      { kakiKata: 'しゅ', yomiKata: 'shu', yomiKata_2: 'syu'},
      { kakiKata: 'しょ', yomiKata: 'sho', yomiKata_2: 'syo' },
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
      { kakiKata: 'シャ', yomiKata: 'sha', yomiKata_2: 'sya' },
      { kakiKata: 'シュ', yomiKata: 'shu', yomiKata_2: 'syu' },
      { kakiKata: 'ショ', yomiKata: 'sho', yomiKata_2: 'syo' },
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
  //返回主菜单
  gotoMenu:function(){
    wx.redirectTo({
      url: '../../menu/menu',
    })
  },
  //再来一次（0为保持原选择数组进入识别界面，1为择错数组替换选择数组进入识别界面）
  gotoRecog:function(e){
    if (e.target.dataset.mode == 1) {
      if (app.globalData.wrongKana.length==0) {console.log("No wrong Kana")   //判断是否错误个数为零
      return}
     
       app.globalData.selectedKana=app.globalData.wrongKana,
       app.globalData.kanaNumber = app.globalData.selectedKana.length,
       app.globalData.wrongKana=[] 
       }
    wx.redirectTo({
      url: '../kanaRecog/kanaRecog',
      })
    
  },
  //重新选择
  gotoSelect:function(){
   wx.redirectTo({
      url: '../select/select',
    })
  },
  //折叠显示
  unfold:function(){
    this.setData({ foldState: !this.data.foldState})
  console.log('unfold triggered')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  //接受正确个数并计算正确率
  onLoad: function (options) {
    var changeOrder = app.globalData.wrongKana;
    var wrongLength = app.globalData.wrongKana.length;
    var correctNumber=options.cN;
    var totalNumber=app.globalData.kanaNumber;
    var percentage = (parseInt(correctNumber * 10000 / totalNumber))/100;
    console.log('正确率为：', correctNumber, '/', totalNumber)
    console.log('百分化后为：',percentage,'%')
    this.setData({ totalNumber: totalNumber, percentage: percentage, correctNumber: correctNumber})
    if (app.globalData.wrongKana.length == 0) this.setData({wrongFlag:false});
    var temp;
    for (let i = 0; i < changeOrder.length-1;i++)
    {
      for (let j = 0; j < changeOrder.length - 1-i;j++)
         {
        if (changeOrder[j]>changeOrder[j+1])
        {
          temp = changeOrder[j]
          changeOrder[j] = changeOrder[j + 1];
          changeOrder[j + 1]=temp
        }
         }

    };
    this.setData({ wrongKanaInOrder: changeOrder})
    this.setData({ wrongLength: wrongLength})
    console.log("wrongKanaInOrder=", this.data.wrongKanaInOrder)

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