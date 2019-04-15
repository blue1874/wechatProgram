// pages/kanaLearn/select.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    HKanaHide: true,
    KKanaHide: true,
    HDKanaHide: true,
    HYKanaHide: true,
    KDKanaHide: true,
    KYKanaHide: true,
    chosenHKana:[],
    chosenKKana:[],
    chosenHDKana: [],
    chosenHYKana: [],
    chosenKDKana: [],
    chosenKYKana: [],
    state:false,
    hira_select_all:false,
    kata_select_all:false,
    hiraD_select_all: false,
    hiraY_select_all: false,
    kataD_select_all: false,
    kataY_select_all: false,
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
      { name: 'が', value: 92 },
      { name: 'ぎ', value: 93 },
      { name: 'ぐ', value: 94 },
      { name: 'げ', value: 95 },
      { name: 'ご', value: 96 },
      { name: 'ざ', value: 97 },
      { name: 'じ', value: 98 },
      { name: 'ず', value: 99 },
      { name: 'ぜ', value: 100 },
      { name: 'ぞ', value: 101 },
      { name: 'だ', value: 102 },
      { name: 'ぢ', value: 103 },
      { name: 'づ', value: 104 },
      { name: 'で', value: 105 },
      { name: 'ど', value: 106 },
      { name: 'ば', value: 107 },
      { name: 'び', value: 108 },
      { name: 'ぶ', value: 109 },
      { name: 'べ', value: 110 },
      { name: 'ぼ', value: 111 },
      { name: 'ぱ', value: 112 },
      { name: 'ぴ', value: 113 },
      { name: 'ぷ', value: 114 },
      { name: 'ぺ', value: 115 },
      { name: 'ぽ', value: 116 },
      { name: 'きゃ', value: 117 },
      { name: 'きゅ', value: 118 },
      { name: 'きょ', value: 119 },
      { name: 'しゃ', value: 120 },
      { name: 'しゅ', value: 121 },
      { name: 'しょ', value: 122 },
      { name: 'ちゃ', value: 123 },
      { name: 'ちゅ', value: 124 },
      { name: 'ちょ', value: 125 },
      { name: 'にゃ', value: 126 },
      { name: 'にゅ', value: 127 },
      { name: 'にょ', value: 128 },
      { name: 'ひゃ', value: 129 },
      { name: 'ひゅ', value: 130 },
      { name: 'ひょ', value: 131 },
      { name: 'みゃ', value: 132 },
      { name: 'みゅ', value: 133 },
      { name: 'みょ', value: 134 },
      { name: 'りあ', value: 135 },
      { name: 'りゅ', value: 136 },
      { name: 'りょ', value: 137 },
      { name: 'ぎゃ', value: 138 },
      { name: 'ぎゅ', value: 139 },
      { name: 'ぎょ', value: 140 },
      { name: 'じゃ', value: 141 },
      { name: 'じゅ', value: 142 },
      { name: 'じょ', value: 143 },
      { name: 'びゃ', value: 144 },
      { name: 'びゅ', value: 145 },
      { name: 'びょ', value: 146 },
      { name: 'ぴゃ', value: 147 },
      { name: 'ぴゅ', value: 148 },
      { name: 'ぴょ', value: 149 },
      { name: 'ガ', value: 150 },
      { name: 'ギ', value: 151 },
      { name: 'グ', value: 152 },
      { name: 'ゲ', value: 153 },
      { name: 'ゴ', value: 154 },
      { name: 'ザ', value: 155 },
      { name: 'ジ', value: 156 },
      { name: 'ズ', value: 157 },
      { name: 'ゼ', value: 158 },
      { name: 'ゾ', value: 159 },
      { name: 'ダ', value: 160 },
      { name: 'ヂ', value: 161 },
      { name: 'ヅ', value: 162 },
      { name: 'デ', value: 163 },
      { name: 'ド', value: 164 },
      { name: 'バ', value: 165 },
      { name: 'ビ', value: 166 },
      { name: 'ブ', value: 167 },
      { name: 'ベ', value: 168 },
      { name: 'ボ', value: 169 },
      { name: 'パ', value: 170 },
      { name: 'ピ', value: 171 },
      { name: 'プ', value: 172 },
      { name: 'ペ', value: 173 },
      { name: 'ポ', value: 174 },
      { name: 'キャ', value: 175 },
      { name: 'キュ', value: 176 },
      { name: 'キョ', value: 177 },
      { name: 'シャ', value: 178 },
      { name: 'シュ', value: 179 },
      { name: 'ショ', value: 180 },
      { name: 'チャ', value: 181 },
      { name: 'チュ', value: 182 },
      { name: 'チョ', value: 183 },
      { name: 'ニャ', value: 184 },
      { name: 'ニュ', value: 185 },
      { name: 'ニョ', value: 186 },
      { name: 'ヒャ', value: 187 },
      { name: 'ヒュ', value: 188 },
      { name: 'ヒョ', value: 189 },
      { name: 'ミャ', value: 190 },
      { name: 'ミュ', value: 191 },
      { name: 'ミョ', value: 192 },
      { name: 'リャ', value: 193 },
      { name: 'リュ', value: 194 },
      { name: 'リョ', value: 195 },
      { name: 'ギャ', value: 196 },
      { name: 'ギュ', value: 197 },
      { name: 'ギョ', value: 198 }, 
      { name: 'ジャ', value: 199 },
      { name: 'ジュ', value: 200 },
      { name: 'ジョ', value: 201 },
      { name: 'ビャ', value: 202 },
      { name: 'ビュ', value: 203 },
      { name: 'ビョ', value: 204 },
      { name: 'ピャ', value: 205 },
      { name: 'ピュ', value: 206 },
      { name: 'ピョ', value: 207 },
    ]
  
  },

  //my functions

  //各组全选
  kanaSelectAll:function(e){
    var kanatype=e.target.dataset.kanatype;
    var kanas = this.data.kanas;
    var flagAll=false;
    var beginnumber;
    var endnumber;
    switch (kanatype) {
      case 'Hkana': { flagAll = this.data.hira_select_all; this.setData({ hira_select_all: !flagAll}); beginnumber = 0; endnumber = 45; break; };
      case 'Kkana': { flagAll = this.data.kata_select_all; this.setData({ kata_select_all: !flagAll });beginnumber = 46; endnumber = 91; break; };
      case 'HDkana': { flagAll = this.data.hiraD_select_all; this.setData({ hiraD_select_all: !flagAll }); beginnumber = 92; endnumber = 116; break; };
      case 'HYkana': { flagAll = this.data.hiraY_select_all; this.setData({ hiraY_select_all: !flagAll }); beginnumber = 117; endnumber = 149; break; };
      case 'KDkana': { flagAll = this.data.kataD_select_all; this.setData({ kataD_select_all: !flagAll }); beginnumber = 150; endnumber = 174; break; };
      case 'KYkana': { flagAll = this.data.kataY_select_all; this.setData({ kataY_select_all: !flagAll }); beginnumber = 175; endnumber = 207; break; };
    }
    if ((!flagAll) == true) {
      var temp = [];
      for (let i = beginnumber; i <= endnumber; i++) { temp = temp.concat(i) }
    }
    else { temp = [] }
    switch (kanatype) {
      case 'Hkana': { app.globalData.chosenHKana = temp; break; };
      case 'Kkana': { app.globalData.chosenKKana = temp; break; };
      case 'HDkana': { app.globalData.chosenHDKana = temp; break; };
      case 'HYkana': { app.globalData.chosenHYKana = temp; break; };
      case 'KDkana': { app.globalData.chosenKDKana = temp; break; };
      case 'KYkana': { app.globalData.chosenKYKana = temp; break; };
    }
    for (let i = beginnumber; i <= endnumber; i++) {
      kanas[i].checked = (!flagAll)
    }
      for (let i = 0; i <= 207; i++) { kanas[i].checked = false }
      for (let i = 0; i < (app.globalData.chosenHKana.length); i++) {
        kanas[(app.globalData.chosenHKana[i])].checked = true
      }
      for (let i = 0; i < (app.globalData.chosenKKana.length); i++) {
        kanas[(app.globalData.chosenKKana[i])].checked = true
      }
      for (let i = 0; i < (app.globalData.chosenHDKana.length); i++) {
        kanas[(app.globalData.chosenHDKana[i])].checked = true
      }
      for (let i = 0; i < (app.globalData.chosenHYKana.length); i++) {
        kanas[(app.globalData.chosenHYKana[i])].checked = true
      }
      for (let i = 0; i < (app.globalData.chosenKDKana.length); i++) {
        kanas[(app.globalData.chosenKDKana[i])].checked = true
      }
    for (let i = 0; i < (app.globalData.chosenKYKana.length); i++) {
      kanas[(app.globalData.chosenKYKana[i])].checked = true
      }
    
    this.setData({kanas:kanas})
   
    app.globalData.selectedKana = this.bindAllKana();
    app.globalData.kanaNumber = app.globalData.selectedKana.length;
      console.log('selectedKana=', app.globalData.selectedKana)
      console.log('kanaNumber=', app.globalData.kanaNumber)

    if (app.globalData.selectedKana.length > 0) this.setData({ state: true })
    else this.setData({ state: false })
 },
 
  //各组点选事件
  kanaCheckboxChange:function(e){

    var kanatype = e.target.dataset.kanatype;
    let kanaPointer=[];
  
  
    for (let i = 0; i < e.detail.value.length; i++) { kanaPointer[i] = parseInt(e.detail.value[i]) };

    switch (kanatype) {
      case 'Hkana': { app.globalData.chosenHKana = kanaPointer; break; };
      case 'Kkana': { app.globalData.chosenKKana= kanaPointer ; break; };
      case 'HDkana': { app.globalData.chosenHDKana=kanaPointer ; break; };
      case 'HYkana': { app.globalData.chosenHYKana=kanaPointer ; break; };
      case 'KDkana': { app.globalData.chosenKDKana=kanaPointer ; break; };
      case 'KYkana': { app.globalData.chosenKYKana=kanaPointer; break; };
    }


    app.globalData.selectedKana = this.bindAllKana();
    app.globalData.kanaNumber = app.globalData.selectedKana.length;
    console.log('selectedKana=：', app.globalData.selectedKana)
    console.log('kanaNumber=：', app.globalData.kanaNumber)
    if (app.globalData.selectedKana.length > 0) this.setData({ state: true })
    else this.setData({ state: false })
  },
  //组合所有选择函数
  bindAllKana:function(){
    return app.globalData.chosenKYKana.concat(app.globalData.chosenKDKana.concat(app.globalData.chosenHYKana.concat(app.globalData.chosenHDKana.concat(app.globalData.chosenHKana.concat(app.globalData.chosenKKana)))))
  },
  //折叠函数
foldOrNot:function(e){
  var kana=e.target.dataset.kana;
  switch(kana){
    case 'Hkana': {  this.setData({ HKanaHide: !this.data.HKanaHide});break;    };
    case 'Kkana': {  this.setData({ KKanaHide: !this.data.KKanaHide});break;    };
    case 'HDkana': { this.setData({ HDKanaHide: !this.data.HDKanaHide });break; };
    case 'HYkana': { this.setData({ HYKanaHide: !this.data.HYKanaHide });break; };
    case 'KDkana': { this.setData({ KDKanaHide: !this.data.KDKanaHide });break; };
    case 'KYkana': { this.setData({ KYKanaHide: !this.data.KYKanaHide });break; };
  }

},
  //返回主菜单
  gotoMenu:function(){
  wx.navigateTo({
    url: '../../menu/menu',
  })
  },
  //开始识别
  beginRecog: function(e) {
    wx.navigateTo({
      url: '../kanaRecog/kanaRecog',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.globalData.chosenHKana = [];
    app.globalData.chosenKKana = [];
    app.globalData.chosenHDKana = [];
    app.globalData.chosenHYKana = [];
    app.globalData.chosenKDKana = [];
    app.globalData.chosenKYKana = [];
    app.globalData.selectedKana = [];
    app.globalData.wrongKana = [];
    app.globalData.kanaNumber= 0;
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