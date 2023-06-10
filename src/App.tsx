import React, {useState} from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';
// import { Todo } from './todo.model';

interface Todo {
  id: string;
  text: string
}

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([])
  
  const addTodoHandler = (text: string): void => {
    setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text}])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter( todo => todo.id !== todoId)
    })
  }


  return (
    <div className="App">
      <NewTodo onAddTodo = {addTodoHandler} />
      <TodoList items = {todos} onDeleteTodo = {todoDeleteHandler} />
    </div>
  );
}

export default App;
