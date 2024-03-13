import { useState } from "react";
// import TodoTable from "./TodoTable";
import TodoGrid from "./TodoGrid";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Button, Stack, TextField } from "@mui/material";



export default function TodoList() {

    const [desc, setDesc] = useState({ description: '', date: '', priority: '' });
    const [todos, setTodos] = useState([]);

    const handleChange = (event) =>
        setDesc({ ...desc, [event.target.name]: event.target.value });

    const yourChangeDateFunc = (date) =>
        setDesc({ ...desc, date });

    const addTodo = () => {
        setTodos([...todos, desc]);
        console.log(todos);
        setDesc({ description: '', date: '', priority: '' })
    };

    const deleteByIndex = (index) => {
        console.log(index);
        setTodos(todos.filter((desc, i) => i !== index));
    }

    return (
        <>
            <Stack mt={2} direction="row" spacing={2} justifyContent="center" alignItems="center">
                <TextField
                    label="Description"
                    name="description"
                    value={desc.description}
                    onChange={handleChange}>
                </TextField>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Date"
                        name="date"
                        format="DD.MM.YYYY"
                        value={desc.date}
                        onChange={yourChangeDateFunc}
                    />
                </LocalizationProvider>
                <TextField
                    label="Priority"
                    name="priority"
                    value={desc.priority}
                    onChange={handleChange}>
                </TextField>

                <Button
                    variant="contained"
                    onClick={addTodo}>
                    Add
                </Button>
            </Stack>

            <TodoGrid todos={todos} deleteByIndex={deleteByIndex} />
        </>
    );
}

