
import { useState } from 'react'


export function NewTodoForm(onSubmit) {
    const [newItem, setNewItem] = useState(" ")
    
    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === '') return

        onSubmit(newItem)
    
        setNewItem("")
    
        }
    return (
    <form  onSubmit={handleSubmit} className='include-item-form'>
    <div className='title-row'>
      <label htmlFor='name'>Include Item</label>
      <input type='text' 
      value={newItem} onChange={e => setNewItem(e.target.value)} 
      id='item' 
      placeholder="Add your Item" />

    </div>
      <button className='btn'>Add Item</button>
    </form>
    )
}