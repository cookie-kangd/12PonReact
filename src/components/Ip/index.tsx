import React, { useEffect } from 'react'
import { Card, Descriptions, message } from 'antd'
import { useSafeState } from 'ahooks'
import { ip } from '@/api'

const Ip: React.FC = () => {
  const [data, setData] = useSafeState<any>([])

  useEffect(() => {
    ip().then((res: any) => {
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
            <Descriptions title="IP">
              <Descriptions.Item label="IP地址">{data.ip}</Descriptions.Item>
              <Descriptions.Item label="省份">{data.province}</Descriptions.Item>
              <Descriptions.Item label="省份编码">{data.provinceId}</Descriptions.Item>
              <Descriptions.Item label="城市">{data.city}</Descriptions.Item>
              <Descriptions.Item label="城市编码">{data.cityId}</Descriptions.Item>
              <Descriptions.Item label="运营商">{data.isp}</Descriptions.Item>
              <Descriptions.Item label="运营商地址">{data.desc}</Descriptions.Item>
            </Descriptions>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Ip
