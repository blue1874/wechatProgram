// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async(event, context) => {
  const wxContext = cloud.getWXContext();
  const MAX_LIMIT = 1000;
  return new Promise(function(solve, reject) {
    if (event.type == "contextIndex") {
      solve(db.collection(event.type).get());
    }
    else if (event.type == "kana") {
      solve(db.collection(event.type).get());
    }
    else {
      solve(db.collection(event.type)
        .where({
          section: _.gte(event.section).and(_.lt(event.section + 1)),
        })
        .limit(MAX_LIMIT)
        .orderBy('section', 'asc')
        .get());
    }
    setTimeout(reject('请求超时，请重新获取'), 5000);
  })

}