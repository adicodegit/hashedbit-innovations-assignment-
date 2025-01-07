function TodoItem(props) {
    function handleDelete() {
        const todoList = Array.from(props.todoList)
        const index = todoList.indexOf(props.item)
        todoList.splice(index, 1)

        props.setList(todoList)
    }

    function handleComplete(e) {
        e.target.parentElement.previousSibling.classList.add("complete")
    }

    return (
        <div>
        <div className="pb-1">
            {props.item}
        </div>
        <div>
            <button type="button" onClick={handleComplete} className="button is-small is-success is-outlined mr-2">Complete</button>
            <button type="button" onClick={handleDelete} className="button is-small is-danger is-outlined">Delete</button>
        </div>
        </div>
    )
}

export default TodoItem