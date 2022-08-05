import React, {useRef} from 'react'

interface NewTodoProps{
    onAddTodo :(todoText: string) => void
}

const NewTodo: React.FC<NewTodoProps> = ({onAddTodo}) => {

    const textInputRef = useRef<HTMLInputElement>(null)

    const todosSubmitHandler = (e: React.FormEvent): void => {
        e.preventDefault()
        const enteredText = textInputRef.current!.value
        onAddTodo(enteredText)
    }

  return (
      <form onSubmit={todosSubmitHandler}>
          <div>
              <label htmlFor='todo-text'>Todo Text</label>
              <input type = 'text' ref = {textInputRef} id = 'todo-text' />
          </div>
          <button type = 'submit'>Add Todo Item</button>
    </form>
  )
}

export default NewTodo