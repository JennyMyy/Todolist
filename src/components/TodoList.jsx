import { useState } from "react";
// import TodoTable from "./TodoTable";
import TodoGrid from "./TodoGrid";

export default function TodoList() {

    const [desc, setDesc] = useState({ description: '', date: '', priority: '' });
    const [todos, setTodos] = useState([]);

    const handleChange = (event) =>
        setDesc({ ...desc, [event.target.name]: event.target.value });
    ;

    const addTodo = () => {
        setTodos([...todos, desc]);
        console.log(todos);
        setDesc({ description: '', date: '', priority: '' })
    };

    const deleteByIndex = (index) => {
        setTodos(todos.filter((desc, i) => i !== index));
    }

    return (
        <>
            <h3>Add todo:</h3>
            <input
                type="text"
                placeholder="description"
                name="description"
                value={desc.description}
                onChange={handleChange}
            />
            <input
                type="date"
                placeholder="date"
                name="date"
                value={desc.date}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="priority"
                name="priority"
                value={desc.priority}
                onChange={handleChange}
            />

            <button onClick={addTodo}>Add</button>

            <TodoGrid todos = {todos} deleteByIndex = {deleteByIndex} />
        </>
    );
}

