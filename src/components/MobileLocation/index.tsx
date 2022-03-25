import React, { useEffect } from 'react'
import { Card, Descriptions, message, Input, Button } from 'antd'
import { useSafeState } from 'ahooks'
import { mobileLocation } from '@/api'

const MobileLocation: React.FC = () => {
  const [input, setInput] = useSafeState<string>('')
  const [data, setData] = useSafeState<any>({})

  useEffect(() => {
    return () => {}
  }, [])

  const getWeather = () => {
    mobileLocation(input).then((res: any) => {
      if (res.code === 1) {
        setData(res.data)
      } else {
        message.error(res.msg)
      }
    })
  }

  return (
    <>
      <div className="container w-full h-screen flex">
        <div
          className="w-11/12 mx-auto flex flex-wrap m-4 p-4 rounded-lg"
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Card
            className="w-full h-11/12 rounded-lg bg-transparent border-transparent flex"
            style={{ justifyContent: 'center', alignItems: 'center' }}
          >
            <div className="flex">
              <Input
                placeholder="请输入想要查询的手机号"
                onChange={(e: any) => setInput(e.target.value)}
              />
              <Button type="primary" shape="round" className="ml-5" onClick={getWeather}>
                查询
              </Button>
            </div>
            {data && JSON.stringify(data) !== '{}' ? (
              <>
                <Descriptions title="手机归属地" className="mt-12">
                  <Descriptions.Item label="手机号码">{data.mobile}</Descriptions.Item>
                  <Descriptions.Item label="归属地">{data.province}</Descriptions.Item>
                  <Descriptions.Item label="运营商">{data.carrier}</Descriptions.Item>
                </Descriptions>
              </>
            ) : (
              ''
            )}
          </Card>
        </div>
      </div>
    </>
  )
}

export default MobileLocation
