function formatNumber(n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}
export async function myhttp(options = {}) {
  let data = await new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      data: Object.assign({}, options.data),
      method: options.methods || 'GET',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // console.log(res);
        // dosomething
        resolve(res, this);
      },
      fail: reject
    });
  });
  return data;
}
export default {
  formatNumber,
  formatTime,
  myhttp
}
