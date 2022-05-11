import React, { useEffect } from 'react'
import { Card, Descriptions, message, Input, Button } from 'antd'
import { useSafeState } from 'ahooks'
import { shortlink } from '@/api'

const Shortlink: React.FC = () => {
  const [input, setInput] = useSafeState<string>('')
  const [data, setData] = useSafeState<any>({})

  useEffect(() => {
    return () => {}
  }, [])

  const getShortlink = () => {
    const reg =
      /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/
    if (reg.test(input)) {
      shortlink(window.btoa(input)).then((res: any) => {
        if (res.code === 1) {
          setData(res.data)
        } else {
          message.error(res.msg)
        }
      })
    } else {
      message.error('请输入正确的网址')
    }
  }

  return (
    <>
      <div className="container w-full h-screen flex">
        <div className="w-11/12 mx-auto flex justify-center items-center flex-wrap m-4 p-4 rounded-lg">
          <Card className="w-full h-11/12 rounded-lg bg-transparent border-transparent flex justify-center items-center">
            <div className="flex">
              <Input
                placeholder="请输入想要生成短链接的链接地址"
                onChange={(e: any) => setInput(e.target.value)}
              />
              <Button type="primary" shape="round" className="ml-5" onClick={getShortlink}>
                生成
              </Button>
            </div>
            {data && JSON.stringify(data) !== '{}' ? (
              <>
                <Descriptions title="生成短链接" className="mt-12">
                  <Descriptions.Item label="原地址">{data.url}</Descriptions.Item>
                  <Descriptions.Item label="短链接">{data.shortUrl}</Descriptions.Item>
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

export default Shortlink
