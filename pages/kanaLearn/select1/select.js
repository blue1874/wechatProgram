// pages/kanaLearn/select1/select.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //滑块状态值
    currentData: 0,
    //假名类型，hira表示平假名，kata表示片假名
    kanaType: ['hira','kata'],
    type: 'hira',
    isMenuOpen: false,
    //清音假名(seion/せいおん)
    seions: [
      { hiraName: 'あ', kataName: 'ア', roma: 'a' },
      { hiraName: 'い', kataName: 'イ', roma: 'i' },
      { hiraName: 'う', kataName: 'ウ', roma: 'u' },
      { hiraName: 'え', kataName: 'エ', roma: 'e' },
      { hiraName: 'お', kataName: 'オ', roma: 'o' },
      { hiraName: 'か', kataName: 'カ', roma: 'ka' },
      { hiraName: 'き', kataName: 'キ', roma: 'ki' },
      { hiraName: 'く', kataName: 'ク', roma: 'ku' },
      { hiraName: 'け', kataName: 'ケ', roma: 'ke' },
      { hiraName: 'こ', kataName: 'コ', roma: 'ko' },
      { hiraName: 'さ', kataName: 'サ', roma: 'sa' },
      { hiraName: 'し', kataName: 'シ', roma: 'shi' },
      { hiraName: 'す', kataName: 'ス', roma: 'su' },
      { hiraName: 'せ', kataName: 'セ', roma: 'se' },
      { hiraName: 'そ', kataName: 'ソ', roma: 'so' },
      { hiraName: 'た', kataName: 'タ', roma: 'ta' },
      { hiraName: 'ち', kataName: 'チ', roma: 'chi' },
      { hiraName: 'つ', kataName: 'ツ', roma: 'tsu' },
      { hiraName: 'て', kataName: 'テ', roma: 'te' },
      { hiraName: 'と', kataName: 'ト', roma: 'to' },
      { hiraName: 'な', kataName: 'ナ', roma: 'na' },
      { hiraName: 'に', kataName: 'ニ', roma: 'ni' },
      { hiraName: 'ぬ', kataName: 'ヌ', roma: 'nu' },
      { hiraName: 'ね', kataName: 'ネ', roma: 'ne' },
      { hiraName: 'の', kataName: 'ノ', roma: 'no' },
      { hiraName: 'は', kataName: 'ハ', roma: 'ha' },
      { hiraName: 'ひ', kataName: 'ヒ', roma: 'hi' },
      { hiraName: 'ふ', kataName: 'フ', roma: 'fu' },
      { hiraName: 'へ', kataName: 'ヘ', roma: 'he' },
      { hiraName: 'ほ', kataName: 'ホ', roma: 'ho' },
      { hiraName: 'ま', kataName: 'マ', roma: 'ma' },
      { hiraName: 'み', kataName: 'ミ', roma: 'mi' },
      { hiraName: 'む', kataName: 'ム', roma: 'mu' },
      { hiraName: 'め', kataName: 'メ', roma: 'me' },
      { hiraName: 'も', kataName: 'モ', roma: 'mo' },
      { hiraName: 'や', kataName: 'ヤ', roma: 'ya' },
      { hiraName: '', kataName: '', roma: '' },//占位假名，方便排版
      { hiraName: 'ゆ', kataName: 'ユ', roma: 'yi' },
      { hiraName: '', kataName: ''},
      { hiraName: 'よ', kataName: 'ヨ', roma: 'yo' },
      { hiraName: 'ら', kataName: 'ラ', roma: 'ra' },
      { hiraName: 'り', kataName: 'リ', roma: 'ri' },
      { hiraName: 'る', kataName: 'ル', roma: 'ru' },
      { hiraName: 'れ', kataName: 'レ', roma: 're' },
      { hiraName: 'ろ', kataName: 'ロ', roma: 'ro' },
      { hiraName: 'わ', kataName: 'ワ', roma: 'wa' },
      { hiraName: '', kataName: '', roma: '' },
      { hiraName: '', kataName: '', roma: '' },
      { hiraName: '', kataName: '', roma: '' },
      { hiraName: 'を', kataName: 'オ', roma: 'o' },
      { hiraName: 'ん', kataName: 'ン', roma: 'n' },
      ],
    //浊音假名(dakuon/だくおん)
    dakuons: [
      { hiraName: 'が', kataName: 'ガ', roma: 'ga' },
      { hiraName: 'ぎ', kataName: 'ギ', roma: 'gi' },
      { hiraName: 'ぐ', kataName: 'グ', roma: 'gu' },
      { hiraName: 'げ', kataName: 'ゲ', roma: 'ge' },
      { hiraName: 'ご', kataName: 'ゴ', roma: 'go' },
      { hiraName: 'ざ', kataName: 'ザ', roma: 'za' },
      { hiraName: 'じ', kataName: 'ジ', roma: 'ji' },
      { hiraName: 'ず', kataName: 'ズ', roma: 'zu' },
      { hiraName: 'ぜ', kataName: 'ゼ', roma: 'ze' },
      { hiraName: 'ぞ', kataName: 'ゾ', roma: 'zo' },
      { hiraName: 'だ', kataName: 'ダ', roma: 'da' },
      { hiraName: 'ぢ', kataName: 'ヂ', roma: 'ji' },
      { hiraName: 'づ', kataName: 'ジ', roma: 'zu' },
      { hiraName: 'で', kataName: 'デ', roma: 'de' },
      { hiraName: 'ど', kataName: 'ド', roma: 'do' },
      { hiraName: 'ば', kataName: 'バ', roma: 'ba' },
      { hiraName: 'び', kataName: 'ビ', roma: 'bi' },
      { hiraName: 'ぶ', kataName: 'ブ', roma: 'bu' },
      { hiraName: 'べ', kataName: 'ベ', roma: 'be' },
      { hiraName: 'ぼ', kataName: 'ボ', roma: 'bo' },
      { hiraName: 'ぱ', kataName: 'バ', roma: 'pa' },
      { hiraName: 'ぴ', kataName: 'ビ', roma: 'pi' },
      { hiraName: 'ぷ', kataName: 'プ', roma: 'pu' },
      { hiraName: 'ぺ', kataName: 'ペ', roma: 'pe' },
      { hiraName: 'ぽ', kataName: 'ポ', roma: 'po' },
    ],
    //拗音假名(youon/ようおん)
    yonos: [
        { hiraName: 'きゃ', kataName: 'キャ', roma: 'kya' },
        { hiraName: 'きゅ', kataName: 'キュ', roma: 'kyu' },
        { hiraName: 'きょ', kataName: 'キョ', roma: 'kyo' },
        { hiraName: 'しゃ', kataName: 'シャ', roma: 'sha' },
        { hiraName: 'しゅ', kataName: 'シュ', roma: 'shu' },
        { hiraName: 'しょ', kataName: 'ショ', roma: 'sho' },
        { hiraName: 'ちゃ', kataName: 'チャ', roma: 'cha' },
        { hiraName: 'ちゅ', kataName: 'チュ', roma: 'chu' },
        { hiraName: 'ちょ', kataName: 'チョ', roma: 'cho' },
        { hiraName: 'にゃ', kataName: 'ニャ', roma: 'nya' },
        { hiraName: 'にゅ', kataName: 'ニュ', roma: 'nyu' },
        { hiraName: 'にょ', kataName: 'ニョ', roma: 'nyo' },
        { hiraName: 'ひゃ', kataName: 'ヒャ', roma: 'hya' },
        { hiraName: 'ひゅ', kataName: 'ヒュ', roma: 'hyu' },
        { hiraName: 'ひょ', kataName: 'ヒョ', roma: 'hyo' },
        { hiraName: 'みゃ', kataName: 'ミャ', roma: 'mya' },
        { hiraName: 'みゅ', kataName: 'ミュ', roma: 'myu' },
        { hiraName: 'みょ', kataName: 'ミョ', roma: 'myo' },
        { hiraName: 'りあ', kataName: 'リャ', roma: 'rya' },
        { hiraName: 'りゅ', kataName: 'リュ', roma: 'ryu' },
        { hiraName: 'りょ', kataName: 'リョ', roma: 'ryo' },
        { hiraName: 'ぎゃ', kataName: 'ギャ', roma: 'gya' },
        { hiraName: 'ぎゅ', kataName: 'ギュ', roma: 'gyu' },
        { hiraName: 'ぎょ', kataName: 'ギョ', roma: 'gyo' },
        { hiraName: 'じゃ', kataName: 'ジャ', roma: 'ja' },
        { hiraName: 'じゅ', kataName: 'ジュ', roma: 'ju' },
        { hiraName: 'じょ', kataName: 'ジョ', roma: 'jo' },
        { hiraName: 'びゃ', kataName: 'ビャ', roma: 'bya' },
        { hiraName: 'びゅ', kataName: 'ビュ', roma: 'byu' },
        { hiraName: 'びょ', kataName: 'ビョ', roma: 'byo' },
        { hiraName: 'ぴゃ', kataName: 'ピャ', roma: 'pya' },
        { hiraName: 'ぴゅ', kataName: 'ピュ', roma: 'pyu' },
        { hiraName: 'ぴょ', kataName: 'ピョ', roma: 'pyo' },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    that.setData({
      type: this.data.kanaType[0],
    })
    
  },

  slideMenu: function (options) {
    const that = this;
    that.setData({
      isMenuOpen: that.data.isMenuOpen ? false : true,
    })
  },
    //获取当前滑块的index
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },

  //点击切换，滑块index赋值
  checkCurrent: function (e) {
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