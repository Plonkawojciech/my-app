'use client'

import { useState } from 'react'

export default function Home() {
  const list = [
    {
      id: '1',
      name: 'zjesc obiad',
    },
    {
      id: '2',
      name: 'zrobic pranie',
    },
  ]

  const [name, setName] = useState('')
  const [todos, setTodos] = useState(list)

  // handler musi być wewnątrz komponentu, żeby mieć dostęp do setName
  const addTodoInput = (e) => {
    setName(e.target.value)
  }

  function addTodoBtn() {
    const newTodos = todos.concat({ name, id: crypto.randomUUID() })

    setTodos(newTodos)

    setName('')
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-16 px-6 sm:px-12 lg:px-24">
      <h1 className="title">Todo List</h1>

      <label className="form-row">
        <input
          type="text"
          className="input"
          placeholder="Add new item"
          value={name}
          onChange={addTodoInput}
        />
        <button className="btn" onClick={addTodoBtn}>
          Add ToDo
        </button>
      </label>

      <ul className="list">
        {todos.map((todo) => (
          <li className="todo-item" key={todo.id}>
            <div className="todo-left">
              <input type="checkbox" className="checkbox" />
              <span className="todo-title">{todo.name}</span>
            </div>
            <button className="todo-delete">delete</button>
          </li>
        ))}
      </ul>
    </main>
  )
}
