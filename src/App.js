import { useState, useEffect } from 'react';
import { NewTodoForm } from './NewTodoForm';
import './App.css';
import { TodoList } from "./TodoList";

function App()  {
  const [todo, setTodo] = useState(() => {
  const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todo))
  }, [todo])



  function addTodo(title) {
    setTodo(currentTodo => {
       return[
         ...currentTodo,
         { id: crypto.randomUUID(), title, completed: false},
       ]
    })
  }
  
    function toggleTodos(id, completed) {
      setTodo(currentTodo => {
        return currentTodo.map(todos => {
          if (todos.id === id){
            return {...todos, completed}
          }
          return todos
        })
      })


    }

    function deleteTodos(id) {
      setTodo(currentTodo => {
        return currentTodo.filter(todos => todos.id !== id)
      }) 
    }
 
 return (
   <>
   <NewTodoForm onSubmit={addTodo}/>
  <h1 className='header'> ToDo List Below </h1>
  <TodoList todo={todo} toggleTodos={toggleTodos} deleteTodos={deleteTodos}/>
  </>

  )

}

export default App;
