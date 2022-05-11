import React, { useEffect } from 'react'
import { Card, Descriptions, message } from 'antd'
import { useSafeState } from 'ahooks'
import { holiday } from '@/api'

const Holiday: React.FC = () => {
  const [data, setData] = useSafeState<any>([])

  useEffect(() => {
    const a = new Date().toLocaleDateString().split('/')
    const today = a.map((item: any) => {
      if (item.length === 1) item = '0' + item
      return item
    })
    holiday(today.join('')).then((res: any) => {
      if (res.code === 1) {
        setData(res.data)
      } else {
        message.error(res.msg)
      }
    })
    return () => {}
  }, [])

  return (
    <>
      <div className="container w-full h-screen flex">
        <div className="w-11/12 mx-auto flex justify-center items-center flex-wrap m-4 p-4 rounded-lg">
          <Card className="w-full h-11/12 rounded-lg bg-transparent border-transparent flex justify-center items-center">
            <Descriptions title="万年历">
              <Descriptions.Item label="日期">{data.date}</Descriptions.Item>
              <Descriptions.Item label="星期">{data.weekDay}</Descriptions.Item>
              <Descriptions.Item label="是否工作日">
                {data.typeDes === '工作日' ? '是' : '不是'}
              </Descriptions.Item>
              <Descriptions.Item label="星座">{data.constellation}</Descriptions.Item>
              <Descriptions.Item label="适宜">{data.suit}</Descriptions.Item>
              <Descriptions.Item label="避免">{data.avoid}</Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Holiday
