export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start py-16 px-6 sm:px-12 lg:px-24">
      <h1 className="title">Todo List</h1>

      <label className="form-row">
        <input type="text" className="input" placeholder="Add new item" />
        <button className="btn">Add ToDo</button>
      </label>

      <ul className="list">
        <li className="todo-item">
          <div className="todo-left">
            <input type="checkbox" className="checkbox" />
            <span className="todo-title">Item 1</span>
          </div>
          <button className="todo-delete">delete</button>
        </li>
      </ul>
    </main>
  )
}
