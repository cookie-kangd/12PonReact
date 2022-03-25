import React, { useEffect } from 'react'
import { Card, Descriptions, message, Input, Button } from 'antd'
import { useSafeState } from 'ahooks'
import { dictionary } from '@/api'

const Dictionary: React.FC = () => {
  const [input, setInput] = useSafeState<string>('')
  const [data, setData] = useSafeState<any>({})

  useEffect(() => {
    return () => {}
  }, [])

  const getDictionary = () => {
    dictionary(input).then((res: any) => {
      if (res.code === 1) {
        setData(res.data[0])
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
                placeholder="请输入想要查询的汉字"
                onChange={(e: any) => setInput(e.target.value)}
              />
              <Button type="primary" shape="round" className="ml-5" onClick={getDictionary}>
                查询
              </Button>
            </div>
            {data && JSON.stringify(data) !== '{}' ? (
              <>
                <Descriptions title="汉语词典" className="mt-12">
                  <Descriptions.Item label="查询汉字">{data.word}</Descriptions.Item>
                  <Descriptions.Item label="读音">{data.pinyin}</Descriptions.Item>
                  <Descriptions.Item label="偏旁部首">{data.radicals}</Descriptions.Item>
                  <Descriptions.Item label="汉语释义">{data.explanation}</Descriptions.Item>
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

export default Dictionary
