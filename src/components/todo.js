import { useState } from "react"
import "../App.css"

const Todo = () => {

    const [inputData, setInputData] = useState('')
    const [todoItems, setTodoItem] = useState([])
    let count = 1

    const addTodo = () => {
        setTodoItem([...todoItems, inputData])
        setInputData('')
    }

    const deleteTodo = (i) => {
        const updatedData = todoItems.filter((element, index) => {
            return index !== i
        })
        setTodoItem(updatedData)
    }

    const deleteAll = () => {
        setTodoItem([])
    }

    return (
        <div className="main">
            <div className="todoTop">
                <h1>Todo App</h1>
                <input type="text" onChange={(e) => setInputData(e.target.value)} value={inputData} className="textBox" placeholder="Add todo" />
                <button className="btnAdd" onClick={() => addTodo()}>&#43;</button>
            </div>
            <div className="todoList">
                {todoItems.map((item, index) => {
                    return (
                        <div key={index} className="todoItem">
                            <h3>{count++}</h3>
                            <h3>{item}</h3>
                            <div>
                                <button className="btnDelete" onClick={() => deleteTodo(index)}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="clearTodo">
                <button className="btnClearAll" onClick={() => deleteAll()}>Delete All</button>
            </div>
        </div>
    )
}

export default Todo
