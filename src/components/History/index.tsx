import React, { useEffect } from 'react'
import { Card, message, Button, Image } from 'antd'
import { useSafeState } from 'ahooks'
import { history } from '@/api'

const History: React.FC = () => {
  const [total, setTotal] = useSafeState<number>(0)
  const [data, setData] = useSafeState<any>([])
  const [tenData, setTenData] = useSafeState<any>([])

  useEffect(() => {
    getHistory()
    return () => {}
  }, [])

  const getHistory = () => {
    history().then((res: any) => {
      if (res.code === 1) {
        setData(res.data)
        setTenData(res.data.slice(0, 10))
        setTotal(res.data.length)
      } else {
        message.error(res.msg)
      }
    })
  }

  const randemHistory = () => {
    if (total.toString().length === 1) {
      message.error('历史上今天没其他事了')
    } else {
      let randomNum = Math.floor(Math.random() * 10) === 0 ? 1 : Math.floor(Math.random() * 10)
      if (randomNum > Number((total / 10).toString().split('.')[0])) {
        randomNum = Number((total / 10).toString().split('.')[0])
      }
      setTenData(data.slice(randomNum * 10 - 10, randomNum * 10))
    }
  }

  return (
    <>
      <div className="container w-full h-screen flex">
        <div className="w-11/12 mx-auto flex justify-center items-center flex-wrap m-4 p-4 rounded-lg">
          <Button type="primary" shape="round" onClick={randemHistory}>
            换一批
          </Button>
          {tenData.map((item: any, index: number) => {
            return (
              <Card
                key={index}
                className="w-17rem h-11rem ml-2 rounded-lg mx-12 bg-transparent border-transparent"
              >
                <div className="flex justify-center font-semibold">
                  <Image width={200} src={item.picUrl} alt={item.title} preview={false} />
                </div>
                <div className="flex justify-center font-semibold">
                  <p>{item.title}</p>
                </div>
                <div className="flex justify-center font-semibold">
                  <p>{item.year + '-' + item.month + '-' + item.day}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default History
