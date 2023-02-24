import React, { memo, useEffect } from 'react'
import { useState } from 'react'
import lzsRequest from '../../services'

const Home = memo(() => {
  console.log('1111111111111111111111')
    const [ highScore, setHighScore ] = useState({})

    // 网络请求的代码
    useEffect(() => {
      console.log('22222222222222222222222222')
      lzsRequest.get({url: "/home/highscore"}).then(res => {
        console.log(res)
        setHighScore(res)
      })
    }, [])
  
  return (
    <div>
        <h2>{highScore.title}</h2>
        <h4>{highScore.subtitle}</h4>
        <ul>
            {
                highScore.list?.map((item) => {
                    return <li key={item.id}>{item.name}</li>
                })
            }
        </ul>
    </div>
  )
})

export default Home