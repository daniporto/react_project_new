

export function TodoItem({completed, id, title, toggleTodos, deleteTodos}) {
    return (
    <li >
    <label>
    <input type="checkbox" checked={completed} 
    onChange={e => toggleTodos(id, e.target.checked)}/>
    {title}
     </label>
      <button 
       onClick={() => deleteTodos(id)}      
     className="btn-del">
   Delete
  </button>
</li>
)
}