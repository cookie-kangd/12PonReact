// 获取assets静态资源
const getAssetsFile = (path: string, url: string) => {
  return new URL(path + `/${url}`, import.meta.url).href
}

export default getAssetsFile
