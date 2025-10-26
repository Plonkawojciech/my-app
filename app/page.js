'use client'

import { useState } from 'react'
import TodoList from './components/TodoList'
import NewTodoForm from './components/NewTodoForm'
import Navbar from './components/Navbar'

export default function Home() {
  const [todos, setTodos] = useState([])

  function addTodo(name) {
    setTodos((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name, checked: false },
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

  function displayList() {}

  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-16 px-6 sm:px-12 lg:px-24">
      <Navbar onNavBtnClick={displayList} />
      <NewTodoForm onSubmit={addTodo} />
      <div className="flex p-8">
        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onToggle={toggleTodoChecked}
        />

        <TodoList
          todos={todos}
          onDelete={deleteTodo}
          onToggle={toggleTodoChecked}
          isDone={'no'}
        />

        <TodoList
          isDone={'yes'}
          todos={todos}
          onDelete={deleteTodo}
          onToggle={toggleTodoChecked}
        />
      </div>
    </main>
  )
}
