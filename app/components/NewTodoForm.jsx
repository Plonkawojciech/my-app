'use client'

import { useState } from 'react'

export default function NewTodoForm({ onSubmit }) {
  const [name, setName] = useState('')

  const addTodoInput = (e) => {
    setName(e.target.value)
  }

  function addTodoBtn(e) {
    e.preventDefault()
    const trimmed = name.trim()
    if (!trimmed) return
    onSubmit(trimmed) // przekaż nazwę do rodzica
    setName('')
  }

  return (
    <form className="form-row" onSubmit={addTodoBtn}>
      <input
        type="text"
        className="input"
        placeholder="Add new item"
        value={name}
        onChange={addTodoInput}
      />
      <button className="btn" type="submit" disabled={!name.trim()}>
        Add ToDo
      </button>
    </form>
  )
}
