import React, { useEffect } from 'react'
import { growCardList } from './data'
import { Card } from 'antd'
import { query } from '@/api/index'

function App() {
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <div className="container w-full h-screen flex">
      <div className="w-11/12 mx-auto flex flex-row flex-wrap m-10">
        {growCardList.map((item: any, index: number) => {
          return (
            <Card key={index} className="w-17rem h-11rem ml-2" size="small" hoverable>
              <div className="flex" style={{ justifyContent: 'center' }}>
                <img width={80} height={100} src={'../src/assets/' + item.icon + '.jpg'} />
              </div>
              <div className="flex font-semibold" style={{ justifyContent: 'center' }}>
                <p>{item.title}</p>
              </div>
              <div
                className="flex mt-2 text-green-600 font-bold"
                style={{ justifyContent: 'center' }}
              >
                <p>{item.price}</p>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default App
