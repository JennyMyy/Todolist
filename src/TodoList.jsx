import { useState } from "react";

function TodoList() {

    const [desc, setDesc] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChange = (event) => {
        setDesc(event.target.value);
    };

    const addTodo = () => {
        setTodos([...todos, desc]);
    };

    return (
        <>
            <input placeholder="Description" onChange={handleChange} value={desc} />
            <button onClick={addTodo}>Add</button>
            <table>
                <tbody>
                    {todos.map((todo, index) => (
                        <tr key={index}>
                            <td>{todo}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default TodoList;