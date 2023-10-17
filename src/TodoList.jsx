
import { TodoItem } from "./TodoItem";

export function TodoList({todo, toggleTodos, deleteTodos}) {
  return(
    <ul className='list'>
     {todo.length === 0 && "No ToDo "}
     {todo.map(todos => {
      return (
          <TodoItem 
          {...todos} 
          key={todos.id} 
          toggleTodos={toggleTodos} 
          deleteTodos={deleteTodos}/>
        
    )
  })}
  </ul>)

}
