// node爬虫,项目启动获取每日appid和appsecret
const cheerio = require('cheerio')
const axios = require('axios')
var fs = require('fs')

// 获取地址的parmas
function getParmeter(url, variable) {
  let vars = url.split('&') // 这里vars的结果是：   ["promotion_code=ZB06AKXFSR", "sku=100"]
  for (let i = 0; i < vars.length; i++) {
    //然后循环
    let pair = vars[i].split('=') //  循环第一次结果pair ["promotion_code", "ZB06AKXFSR"]  循环第二次结果pair ["sku", "100"]
    if (pair[0].indexOf('?') !== -1) {
      pair[0] = pair[0].split('?')[1]
    }
    if (pair[0] === variable) {
      // 做判断 如果参数名和我们的实参一样
      return pair[1] // 就返回对应的值
    }
  }
  return ''
}

async function getData() {
  const url = 'https://www.mxnzp.com/doc/detail?id=1' // 拼接请求的页面链接
  const response = await axios.get(url).catch(function (error) {
    return error
  })

  // 不存在 data 字段时，直接返回 （请求出现了错误）
  if (!response.data) {
    return response
  }

  const $ = cheerio.load(response.data) // 传入页面内容
  let obj = {}
  $('.api_top').each(function () {
    // 像jQuery一样获取对应节点值
    obj.app_id = getParmeter($(this).find('.desc_content').eq(3).text().trim(), 'app_id')
    obj.app_secret = getParmeter($(this).find('.desc_content').eq(3).text().trim(), 'app_secret')
  })

  let str = JSON.stringify(obj, '', '\t')
  fs.mkdirSync('public')
  fs.writeFile('public\\api.json', str, function (err) {
    if (err) {
      return console.error(err)
    }
  })
}

getData()
