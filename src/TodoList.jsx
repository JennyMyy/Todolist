import { useState } from "react";
import TodoTable from "./TodoTable";

function TodoList() {

    const [desc, setDesc] = useState({ description: '', date: '' });
    const [todos, setTodos] = useState([]);

    const handleChange = (event) =>
        setDesc({ ...desc, [event.target.name]: event.target.value });
    ;

    const addTodo = () => {
        setTodos([...todos, desc]);
        console.log(todos);
        setDesc({ description: '', date: '' })
    };

    const deleteByIndex = (index) => {
        setTodos(todos.filter((desc, i) => i !== index));
    }

    return (
        <>
            <h3>Add todo:</h3>
            Description: <input
                type="text"
                name="description"
                value={desc.description}
                onChange={handleChange}
            />
            Date: <input
                type="date"
                name="date"
                value={desc.date}
                onChange={handleChange}
            />
            <button onClick={addTodo}>Add</button>

            <TodoTable todos = {todos} poistaTehtava = {deleteByIndex} />
        </>
    );
}

export default TodoList;