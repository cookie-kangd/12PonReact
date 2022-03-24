import React from 'react'
import ReactDOM from 'react-dom'
import RouterView from '@/components/RouterView'
import 'antd/dist/antd.less'
import './index.css'
import './index.module.less'
// 全局例子背景特效
import ParticlesBg from 'particles-bg'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// // windicss devtools support (dev only)
import 'virtual:windi-devtools'

ReactDOM.render(
  <>
    <ParticlesBg type="square" bg={true}></ParticlesBg>
    <RouterView />
  </>,
  document.getElementById('root')
)
