import React from 'react'
import { Spin } from 'antd'

const Loading: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Spin size="large" />
    </div>
  )
}

export default Loading
