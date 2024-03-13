// import "./App.css";
import { AppBar, Container, CssBaseline, Toolbar, Typography } from '@mui/material';
// import TodoList from './components/TodoList';
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <Container maxWidth="xl">
        <CssBaseline />
        <AppBar position="sticky">
          <Toolbar>
            <Typography variant="h6">
              My Todos
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="App">
          <nav>
            <Link to={"/"}>HOME</Link>
            <n> </n>
            <Link to={"/todoList"}>TODOS</Link>
          </nav>
          <Outlet />
        </div>
      </Container>
    </>
  );
}

export default App;