import React, { useEffect } from 'react'
import { Card, Descriptions, message, Input, Button } from 'antd'
import { useSafeState } from 'ahooks'
import { weather } from '@/api'

const Weather: React.FC = () => {
  const [input, setInput] = useSafeState<string>('')
  const [data, setData] = useSafeState<any>({})

  useEffect(() => {
    return () => {}
  }, [])

  const getWeather = () => {
    weather(input).then((res: any) => {
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
                placeholder="请输入想要查询天气的城市"
                onChange={(e: any) => setInput(e.target.value)}
              />
              <Button type="primary" shape="round" className="ml-5" onClick={getWeather}>
                查询
              </Button>
            </div>
            {data && JSON.stringify(data) !== '{}' ? (
              <>
                <Descriptions title="天气" className="mt-12">
                  <Descriptions.Item label="查询城市">{data.address}</Descriptions.Item>
                  <Descriptions.Item label="城市编码">{data.cityCode}</Descriptions.Item>
                  <Descriptions.Item label="摄氏度">{data.temp}</Descriptions.Item>
                  <Descriptions.Item label="天气">{data.weather}</Descriptions.Item>
                  <Descriptions.Item label="风朝向">{data.windDirection}</Descriptions.Item>
                  <Descriptions.Item label="风级">{data.windPower}</Descriptions.Item>
                  <Descriptions.Item label="湿度">{data.humidity}</Descriptions.Item>
                  <Descriptions.Item label="更新时间">{data.reportTime}</Descriptions.Item>
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

export default Weather
