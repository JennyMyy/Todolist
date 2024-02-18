import { useState } from "react";

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

    const itemsRows = todos.map((desc, index) =>
        <tr key={index}>
            <td>{desc.date}</td>
            <td>{desc.description}</td>
            <td><button onClick={() => deleteByIndex(index)}>Delete</button></td>
        </tr>
    )

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
                type="text"
                name="date"
                value={desc.date}
                onChange={handleChange}
            />
            <button onClick={addTodo}>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                    </tr>
                    {itemsRows}
                </thead>
            </table>
        </>
    );
}

export default TodoList;