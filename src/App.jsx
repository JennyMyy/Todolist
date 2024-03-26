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
            <Link to={"/"}>HOME</Link>{' '}
            <Link to={"/about"}>About</Link>{' '}
            <Link to={"/contact"}>Contact</Link>{' '}
            <Link to={"/todoList"}>TODOS</Link>{' '}
          </nav>
          <Outlet />
        </div>
      </Container>
    </>
  );
}
// const [tabValue, setTabValue] = useState("home")
// ja sit handleTabChange väliin
// <Tabs value={tabvValue} onChange={handleTabChanged}
//<Tab label="Home" value="home"/>
// <Tabs/>
// {tabValue = 'todos' && <home/>}

export default App;