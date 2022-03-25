import React, { useEffect } from 'react'
import { Card, Descriptions, message, Input, Button } from 'antd'
import { useSafeState } from 'ahooks'
import { convert } from '@/api'

const Convert: React.FC = () => {
  const [input, setInput] = useSafeState<string>('')
  const [data, setData] = useSafeState<any>({})

  useEffect(() => {
    return () => {}
  }, [])

  const getConvert = () => {
    convert(input).then((res: any) => {
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
                placeholder="请输入想要转繁体字的文字"
                onChange={(e: any) => setInput(e.target.value)}
              />
              <Button type="primary" shape="round" className="ml-5" onClick={getConvert}>
                转换
              </Button>
            </div>
            {data && JSON.stringify(data) !== '{}' ? (
              <>
                <Descriptions title="简繁转换" className="mt-12">
                  <Descriptions.Item label="简体字">{data.originContent}</Descriptions.Item>
                  <Descriptions.Item label="繁体字">{data.convertContent}</Descriptions.Item>
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

export default Convert
