import React, { useEffect } from 'react'
import { Card, Button, message, Input, Image } from 'antd'
import { useSafeState } from 'ahooks'
import { qrcode } from '@/api'

const Qrcode: React.FC = () => {
  const [input, setInput] = useSafeState<string>('')
  const [img, setImg] = useSafeState<string>('')

  useEffect(() => {
    return () => {}
  }, [])

  const getImg = () => {
    qrcode(input).then((res: any) => {
      if (res.code === 1) {
        setImg(res.data.qrCodeUrl)
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
            {img && img !== '' ? (
              <div className="flex justify-center mb-5">
                <Image width={200} src={img} alt={input} preview={false} />
              </div>
            ) : (
              ''
            )}
            <div className="flex">
              <Input
                placeholder="请输入想要生成二维码的文字或链接"
                onChange={(e: any) => setInput(e.target.value)}
              />
              <Button type="primary" shape="round" className="ml-5" onClick={getImg}>
                生成
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Qrcode
