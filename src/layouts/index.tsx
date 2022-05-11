import React, { useEffect } from 'react'
import { growCardList } from './data'
import { Card } from 'antd'
import getAssetsFile from '@/utils/pubUse'

const App: React.FC = (props: any) => {
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <>
      <div className="container w-full h-screen flex">
        <div className="w-11/12 mx-auto flex justify-center items-center flex-wrap m-4 p-4 rounded-lg">
          {growCardList.map((item: any, index: number) => {
            return (
              <Card
                key={index}
                className="w-17rem h-11rem ml-2 rounded-lg mx-12 bg-transparent border-transparent"
                hoverable
                onClick={() => props.history.push('/' + item.key)}
              >
                <div className="flex justify-center">
                  <img width={80} height={100} src={getAssetsFile(item.icon + '.jpg')} />
                </div>
                <div className="flex justify-center font-semibold">
                  <p>{item.title}</p>
                </div>
                <div className="flex justify-center mt-2 text-green-600 font-bold">
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
