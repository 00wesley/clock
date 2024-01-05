"use client"

import React, { useEffect, useState } from 'react';

const App = () => {

  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [milliseconds, setMilliseconds] = useState(0)

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date()

      const hour = now.getHours()
      const minute = now.getMinutes()
      const second = now.getSeconds()
      const millisecond = now.getMilliseconds()

      setHours(hour)
      setMinutes(minute)
      setSeconds(second)
      setMilliseconds(millisecond)

    }, 1000)

    const checkTime = () => {

      const now = new Date()

      if (now.getHours() == 15 && now.getSeconds() == 16) {

        const notification = new Notification('Hora de bater o ponto', {
          body: 'Vai bater teu ponto!'
        })

        notification.onclick = () => {
          notification.close()
        }

      }
    }

    const intervalCheck = setInterval(checkTime, 1000)

    return () => {
      clearInterval(interval) 
      clearInterval(intervalCheck)
    }

  }, [])

  
  return (

    <div className='container'>
      <div className="clock">
        <div className="hours">{hours}</div>
        <div className="min">{minutes}</div>
        <div className="seconds-container">
         <div className="seconds-and-miliseconds">{seconds}</div>
         <div className="seconds-and-miliseconds">{milliseconds}</div>
        </div>
      </div>
    </div>

   );
}
 
export default App;