'use client'

export default function TodoList({ todos = [], onDelete, onToggle, isDone }) {
  // prosty komunikat gdy brak elementów
  if (!todos.length) return <div className="list">No Todos</div>

  if (isDone == 'yes') {
    return (
      <ul className="list ">
        <h1 className="title">Done Todo List</h1>
        {todos
          .filter((todo) => !!todo.checked) // zostaw tylko te z checked = true
          .map((todo) => (
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
  } else if (isDone == 'no')
    return (
      <ul className="list">
        <h1 className="title">Todo List</h1>
        {todos
          .filter((todo) => !todo.checked) // zostaw tylko te z checked = true
          .map((todo) => (
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
  else
    return (
      <ul className="list">
        <h1 className="title">All Todo List</h1>
        {todos
          // zostaw tylko te z checked = true
          .map((todo) => (
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
