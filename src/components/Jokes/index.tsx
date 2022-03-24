import React, { useEffect } from 'react'
import { Card, message, Button } from 'antd'
import { useSafeState } from 'ahooks'
import { jokes } from '@/api'

const Jokes: React.FC = () => {
  const [data, setData] = useSafeState<any>([])

  useEffect(() => {
    getJokes(1)
    return () => {}
  }, [])

  const getJokes = (page: number) => {
    jokes(page).then((res: any) => {
      if (res.code === 1) {
        setData(res.data.list)
      } else {
        message.error(res.msg)
      }
    })
  }

  const randomJokes = () => {
    getJokes(Math.floor(Math.random() * 900))
  }

  return (
    <>
      <div className="container w-full h-screen flex">
        <div
          className="w-11/12 mx-auto flex flex-wrap m-4 p-4 rounded-lg"
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          <Button type="primary" shape="round" onClick={randomJokes}>
            换一批
          </Button>
          {data.map((item: any, index: number) => {
            return (
              <Card
                key={index}
                className="w-17rem h-11rem ml-2 rounded-lg mx-12 bg-transparent border-transparent"
              >
                <div className="flex font-semibold" style={{ justifyContent: 'center' }}>
                  <p>{item.content}</p>
                </div>
                <div className="flex font-semibold" style={{ justifyContent: 'center' }}>
                  <p>{item.updateTime}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Jokes
