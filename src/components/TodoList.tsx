import React from 'react'

interface TodoListProps{
    items: { id: string, text: string }[];
    onDeleteTodo : (id: string) => void
}

const TodoList = ({items, onDeleteTodo}: TodoListProps): JSX.Element => {
    
  return (
      <ul>
          { items.length ? 
              items.map(item => {
                  return <div key={item.id}>
                      <span>{item.text}</span>
                      <button onClick={onDeleteTodo.bind(null,item.id)}>Delete</button>
                  </div>
            })  : <p>No available todo Item</p>
          }
    </ul>
  )
}

export default TodoList