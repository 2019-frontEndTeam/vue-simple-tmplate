
const dates = new Date();
let year = dates.getFullYear();
let month = dates.getMonth() + 1<10?'0'+(dates.getMonth() + 1):dates.getMonth()+ 1;

function getDateStr(AddDayCount) {
      var dd = new Date();
      dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
      var y = dd.getFullYear();
      var m = dd.getMonth()+1;//获取当前月份的日期
      var d = dd.getDate();
      return y+'-'+(m<10?'0'+m:m)+'-'+(d<10?'0'+d:d);
  }

// 计算年月日
let comYear = getDateStr(0)
// 计算年月日+1
let comLastDay = getDateStr(1)
// 计算前一天
let combeforeDay = getDateStr(-1)
// 计算年月日时分秒
// let comSecond =  getTimeStr(0)
// 计算年月
let comMonth = year.toString() + month.toString();

export  {comYear,comMonth,comLastDay,combeforeDay}