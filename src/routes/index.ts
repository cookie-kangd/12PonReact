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
  }
]

export default routes
