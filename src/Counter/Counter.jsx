import React, { useState } from 'react'
import style from './Counter.module.scss'

export const Counter = () => {

  const [count, setCount] = useState(0)
  const plusCount = () => setCount(count + 1)
  const minusCount = () => setCount(count - 1)

  return (
    <div className={style.counter}>
      <div className={style.title}>Счетчик:</div>
      <div className={style.total}>{count}</div>
      <div>
        <button onClick={() => minusCount()} className={style.minus}>- Минус</button>
        <button on onClick={() => plusCount()} className={style.plus}>Плюс +</button>
      </div>
    </div>
  )
}

