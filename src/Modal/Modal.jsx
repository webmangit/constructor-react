import React, { useState } from 'react'
import style from './Modal.module.scss'

export const Modal = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)

  return (
    <div className={style.modalWrapper}>
      <button className={style.modalBtn} onClick={toggle}>✨ Открыть окно</button>

      <div className={`${style.overlay} ${style.animated} ${open ? style.show : ''}`}>
        <div className={style.modal}>
          <svg height="200" viewBox="0 0 200 200" width="200" onClick={toggle}>
            <title />
            <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
          </svg>
          <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
        </div>
      </div>

    </div>
  )
}

