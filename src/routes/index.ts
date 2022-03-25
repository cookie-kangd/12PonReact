import loadable from '@loadable/component'

export type RouteType = {
  component: any
  path: string
  exact?: boolean
  redirect?: string
  meta?: {
    [key: string]: any
  }
  routes?: RouteType[]
}

const routes: RouteType[] = [
  {
    path: '/',
    meta: {
      title: '首页'
    },
    component: loadable(() => import('@/layouts/index'))
  },
  {
    path: '/holiday',
    meta: {
      title: '万年历'
    },
    component: loadable(() => import('@/components/Holiday'))
  },
  {
    path: '/qrcode',
    meta: {
      title: '二维码'
    },
    component: loadable(() => import('@/components/Qrcode'))
  },
  {
    path: '/ip',
    meta: {
      title: 'IP地址'
    },
    component: loadable(() => import('@/components/Ip'))
  },
  {
    path: '/jokes',
    meta: {
      title: '搞笑段子'
    },
    component: loadable(() => import('@/components/Jokes'))
  },
  {
    path: '/weather',
    meta: {
      title: '全国天气'
    },
    component: loadable(() => import('@/components/Weather'))
  },
  {
    path: '/mobileLocation',
    meta: {
      title: '手机归属地'
    },
    component: loadable(() => import('@/components/MobileLocation'))
  },
  {
    path: '/history',
    meta: {
      title: '历史上今天'
    },
    component: loadable(() => import('@/components/History'))
  },
  {
    path: '/convert',
    meta: {
      title: '简繁转换'
    },
    component: loadable(() => import('@/components/Convert'))
  },
  {
    path: '/translate',
    meta: {
      title: '多语种翻译'
    },
    component: loadable(() => import('@/components/Translate'))
  },
  {
    path: '/dictionary',
    meta: {
      title: '汉语词典'
    },
    component: loadable(() => import('@/components/Dictionary'))
  },
  {
    path: '/shortlink',
    meta: {
      title: '生成短链接'
    },
    component: loadable(() => import('@/components/Shortlink'))
  },
  {
    path: '/idcard',
    meta: {
      title: '身份证查询'
    },
    component: loadable(() => import('@/components/Idcard'))
  }
]

export default routes
