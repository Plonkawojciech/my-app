'use client'

export default function TodoList({ todos = [], onDelete, onToggle }) {
  // prosty komunikat gdy brak elementów
  if (!todos.length) return <div className="list">No Todos</div>

  return (
    <ul className="list">
      {todos.map((todo) => (
        <li className="todo-item" key={todo.id}>
          <div className="todo-left">
            <input
              type="checkbox"
              className="checkbox"
              checked={!!todo.checked}
              onChange={() => onToggle(todo.id)}
            />
            <span className="todo-title">{todo.name}</span>
          </div>
          <button className="todo-delete" onClick={() => onDelete(todo.id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  )
}
