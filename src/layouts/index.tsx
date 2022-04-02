import React, { useEffect } from 'react'
import { growCardList } from './data'
import { Card } from 'antd'
import usePub from '@/utils/pubUse'

const App: React.FC = (props: any) => {
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <>
      <div className="container w-full h-screen flex">
        <div
          className="w-11/12 mx-auto flex flex-wrap m-4 p-4 rounded-lg"
          style={{ justifyContent: 'center', alignItems: 'center' }}
        >
          {growCardList.map((item: any, index: number) => {
            return (
              <Card
                key={index}
                className="w-17rem h-11rem ml-2 rounded-lg mx-12 bg-transparent border-transparent"
                hoverable
                onClick={() => props.history.push('/' + item.key)}
              >
                <div className="flex" style={{ justifyContent: 'center' }}>
                  <img width={80} height={100} src={usePub('../assets', item.icon + '.jpg')} />
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
          <div>Copyright@2022 by DK</div>
        </div>
      </div>
    </>
  )
}

export default App
