import { get } from '@/utils/request'

// 万年历
export const holiday = async (parmas: any) => {
  return get(`/api/holiday/single/${parmas}`, '')
}

// 二维码
export const qrcode = async (parmas: any) => {
  return get(`/api/qrcode/create/single?content=${parmas}`, '')
}

// IP地址
export const ip = async () => {
  return get('/api/ip/self', '')
}

// 搞笑段子
export const jokes = async (parmas: any) => {
  return get(`/api/jokes/list?page=${parmas}`, '')
}

// 全国天气查询
export const weather = async (parmas: any) => {
  return get(`/api/weather/current/${parmas}`, '')
}

// 手机归属地
export const mobileLocation = async (parmas: any) => {
  return get(`/api/mobile_location/aim_mobile?mobile=${parmas}`, '')
}

// 历史上的今天是什么日子
export const history = async () => {
  return get('/api/history/today', '')
}

// 简繁转换工具
export const convert = async (parmas: any) => {
  return get(`/api/convert/zh?content=${parmas}`, '')
}

// 多语种翻译
export const translate = async (parmas: any) => {
  return get(`/api/convert/translate?content=${parmas.content}&from=zh&to=${parmas.language}`, '')
}

// 汉语词典
export const dictionary = async (parmas: any) => {
  return get(`/api/convert/dictionary?content=${parmas}`, '')
}

// URL生成短链接
export const shortlink = async (parmas: any) => {
  return get(`/api/shortlink/create?url=${parmas}`, '')
}

// 彩票中奖信息
export const lottery = async (parmas: any) => {
  return get(`/api/lottery/common/aim_lottery?expect=${parmas.code}&code=${parmas.type}`, '')
}
