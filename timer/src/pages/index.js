import { React, useEffect } from 'react'
import { useState } from 'react'
import backgroud from '../images/timer.jpg'

export default function Home() {
  const [timerStart, setTimerStart] = useState(25 * 60)

  const minutes = Math.floor(timerStart / 60)
  const seconds = timerStart % 60

  useEffect(() => {
    if (timerStart === 0) {
      alert('ESTÁ NA HORA DE DESCANSAR')
    } else {
      setTimeout(() => {
        setTimerStart(timerStart - 1)
      }, 1000)
    }
  }, [timerStart])

  return (
    <>
      <head>
        <title>Timer</title>
      </head>
      <body>
        <img></img>
        <header>
          <h2>Timer test</h2>
        </header>
        <div className="timer">
          <span>
            {String(minutes).padStart(2, '0')}:
            {String(seconds).padStart(2, '0')}
          </span>
        </div>
      </body>
    </>
  )
}
