import styles from "../styles/styles.module.css"
const Todo = ({todoItem,todoList,setTodoList})=>{

  const deleteTodo= ()=>{
    setTodoList(todoList.filter((item) => {
     return item.id!==todoItem.id;
    }))
    // setTodoList(todoList.filter((item)=>item.id!== todoItem.id));
  }

  return (
  <div>
      <div className={styles.todoitem}>
        <h3 className={styles.todoname}>{todoItem.name}</h3>
        <button className={styles.deletebutton} onClick={deleteTodo}>Delete</button>
      </div>
    </div>
  )
}
export default Todo;
