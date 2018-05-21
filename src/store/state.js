let defaultCity = '上海'

// 使用try catch避免用户匿名浏览获取浏览器关闭了localStorage而导致程序错误
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {}

export default {
  city: defaultCity
}
