'use client'

import { useState } from 'react'

export default function Navbar(onNavBtnClick) {
  const [btnMess, setBtnMess] = useState('')

  return (
    <>
      <button
        onClick={() => alert('Show all')}
        {...setBtnMess("Show All") = onNavBtnClick}
      >
        Show all
      </button>
      <button
        onClick={() => alert('Show Todo')}
        {...(setBtnMess('showTodo') = onNavBtnClick)}
      >
        Show ToDo
      </button>
      <button
        onClick={() => alert('Show Done')}
        {...(setBtnMess('Show Done') = onNavBtnClick)}
      >
        Show Done
      </button>
    </>
  )
}
