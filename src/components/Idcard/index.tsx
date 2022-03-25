import React, { useEffect } from 'react'
import { Card, Descriptions, message, Input, Button } from 'antd'
import { useSafeState } from 'ahooks'
import { idcard } from '@/api'

const Shortlink: React.FC = () => {
  const [input, setInput] = useSafeState<string>('')
  const [data, setData] = useSafeState<any>({})

  useEffect(() => {
    return () => {}
  }, [])

  const getIdcard = () => {
    const reg =
      /^\d{6}((((((19|20)\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|(((19|20)\d{2})(0[13578]|1[02])31)|((19|20)\d{2})02(0[1-9]|1\d|2[0-8])|((((19|20)([13579][26]|[2468][048]|0[48]))|(2000))0229))\d{3})|((((\d{2})(0[13-9]|1[012])(0[1-9]|[12]\d|30))|((\d{2})(0[13578]|1[02])31)|((\d{2})02(0[1-9]|1\d|2[0-8]))|(([13579][26]|[2468][048]|0[048])0229))\d{2}))(\d|X|x)$/
    if (reg.test(input)) {
      idcard(input).then((res: any) => {
        if (res.code === 1) {
          setData(res.data)
        } else {
          message.error(res.msg)
        }
      })
    } else {
      message.error('请输入正确的身份证号码')
    }
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
                placeholder="请输入想要查询的身份证号码"
                onChange={(e: any) => setInput(e.target.value)}
              />
              <Button type="primary" shape="round" className="ml-5" onClick={getIdcard}>
                查询
              </Button>
            </div>
            {data && JSON.stringify(data) !== '{}' ? (
              <>
                <Descriptions title="身份号查询" className="mt-12">
                  <Descriptions.Item label="身份证号码">{data.idCardNum}</Descriptions.Item>
                  <Descriptions.Item label="身份证地址">{data.address}</Descriptions.Item>
                  <Descriptions.Item label="生日">{data.birthday}</Descriptions.Item>
                  <Descriptions.Item label="性别">{data.sex}</Descriptions.Item>
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
