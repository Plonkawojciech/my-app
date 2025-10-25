'use client'

import { useState } from 'react'
import TodoList from './components/TodoList'
import NewTodoForm from './components/NewTodoForm'

export default function Home() {
  const [todos, setTodos] = useState([])

  function addTodo(name) {
    const trimmed = name.trim()
    if (!trimmed) return
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: trimmed, checked: false },
    ])
  }

  function deleteTodo(id) {
    setTodos((prev) => prev.filter((t) => t.id !== id))
  }

  function toggleTodoChecked(id) {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    )
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-16 px-6 sm:px-12 lg:px-24">
      <h1 className="title">Todo List</h1>
      <NewTodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodoChecked}
      />
    </main>
  )
}
