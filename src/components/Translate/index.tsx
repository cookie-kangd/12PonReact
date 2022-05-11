import React, { useEffect } from 'react'
import { Card, Descriptions, message, Input, Button, Select } from 'antd'
import { useSafeState } from 'ahooks'
import { translate } from '@/api'
import { translateTypeList } from './data'

const Translate: React.FC = () => {
  const [input, setInput] = useSafeState<string>('')
  const [select, setSelect] = useSafeState<string>('')
  const [data, setData] = useSafeState<any>({})

  useEffect(() => {
    return () => {}
  }, [])

  const hanlChange = (value: string) => {
    setSelect(value)
  }

  const getTranslate = () => {
    const obj: any = {}
    obj.content = input
    obj.language = select
    translate(obj).then((res: any) => {
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
        <div className="w-11/12 mx-auto flex justify-center items-center flex-wrap m-4 p-4 rounded-lg">
          <Card className="w-full h-11/12 rounded-lg bg-transparent border-transparent flex justify-center items-center">
            <div className="flex">
              <Input.Group compact>
                <Select defaultValue="zh" onChange={hanlChange}>
                  {translateTypeList.map((item: any, index: number) => {
                    return (
                      <Select.Option value={item.value} key={index}>
                        {item.label}
                      </Select.Option>
                    )
                  })}
                </Select>
                <Input
                  style={{ width: '90%' }}
                  placeholder="请输入想要转繁体字的文字"
                  onChange={(e: any) => setInput(e.target.value)}
                />
              </Input.Group>
              <Button type="primary" shape="round" onClick={getTranslate}>
                翻译
              </Button>
            </div>
            {data && JSON.stringify(data) !== '{}' ? (
              <>
                <Descriptions title="多语种翻译(目前仅支持中文翻译成外语)" className="mt-12">
                  <Descriptions.Item label="中文">{data.origin}</Descriptions.Item>
                  <Descriptions.Item label="翻译文本">{data.result}</Descriptions.Item>
                  <Descriptions.Item label="语种">
                    {translateTypeList.map((item: any) => {
                      if (item.value === data.resultLanguage) {
                        return item.label
                      }
                    })}
                  </Descriptions.Item>
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

export default Translate
