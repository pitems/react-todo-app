import Header from "./component/Header";
import Form from "./component/Form";
import { useState } from "react";
import TodoList from "./component/TodoList";
function App() {
  const [todo,setTodo]= useState("");
  const [todoList , setTodoList]= useState([]);
  return (
    <div className="App">
    <Header></Header>
    <Form 
        todo={todo} 
        setTodo = {setTodo} 
        todoList={todoList} 
        setTodoList={setTodoList}>

      </Form>
  <TodoList todoList={todoList} setTodoList={setTodoList} />
    </div>
  ); 
}

export default App;
