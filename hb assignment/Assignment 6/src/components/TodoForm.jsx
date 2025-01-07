import { useEffect } from "react"

function TodoForm(props) {

    function handleSubmit(e) {
        e.preventDefault()

        const formData = new FormData(document.querySelector("form"))
        const todo = formData.get("todo")
        const todoList = Array.from(props.todoList)
        todoList.push(todo)
        props.setList(todoList)
    }

    useEffect(() => {
        const input = document.querySelector("input")
        input.value = ""
    }, [props.todoList])

    return (
        <form className="block is-flex is-justify-content-center" onSubmit={handleSubmit}>
            <div className="field has-addons">
                <div className="control">
                    <input className="input" name="todo" style={{ backgroundColor: '#333', color: '#fff' }}/>
                </div>
                <div className="control">
                    <button className="button is-primary">Add</button>
                </div>
            </div>
        </form>
    )
}

export default TodoForm