import React, { useState } from 'react'
import './NewTodo.css'

interface NewTodoProps{
    onAddTodo :(todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({onAddTodo}) => {

    // const textInputRef = useRef<HTMLInputElement>(null)

    const [todoText, setTodoText] = useState<string>('')
    const [err, setErr] = useState<boolean>(false)

    const todosSubmitHandler = (e: React.FormEvent): void => {
        e.preventDefault()
        // const enteredText = textInputRef.current!.value
        if (todoText.length === 0) {
            setErr(true)
            return 
        }
        onAddTodo(todoText)
        setTodoText('')
        setErr(false)
    }

  return (
      <form onSubmit={todosSubmitHandler}>
          <div className='form-control'>
              <label htmlFor='todo-text'>Todo Text</label>
              <input style={{
                  borderColor: err ? 'red' : '#50005a'
              }} type = 'text' onChange={e => setTodoText(e.target.value)} value = {todoText} id = 'todo-text' />
          </div>
          <button type = 'submit'>Add Todo Item</button>
    </form>
  )
}

export default NewTodo