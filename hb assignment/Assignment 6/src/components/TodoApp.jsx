import { useState } from "react"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"

function TodoApp() {
    const [todoList, setList] = useState([])

    const todoItems = todoList.map((li, i) => {
        const todo = li.trim()

        if (todo == "") {
            return null
        }
        return <li className="block" key={i}><TodoItem item={todo} todoList={todoList} setList={setList} /></li>
    }).sort();
  
    return (
        <div id='todo-app' className="box">
            <TodoForm todoList={todoList} setList={setList}/>
            <ol>
                {todoItems}
            </ol>
        </div>
    )
}

export default TodoApp