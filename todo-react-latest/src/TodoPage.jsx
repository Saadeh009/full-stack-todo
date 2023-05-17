import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react'
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import AddTodoForm from './components/AddTodoForm';
import TotalCompleteItems from "./components/TotalCompleteItems";
const TodoPage = () => {
  const [display, setDisplay] = useState(true)
  function displayTodos() {
    setDisplay((currentDisplay)=> !currentDisplay)
  }
  return (
    <Box  sx={{height: '100vh'}}>
    <Container>
        <Navbar />
        <TotalCompleteItems displayTodos={displayTodos} display={display} />
        <TodoList display={display} />
        <AddTodoForm />
    </Container>
    </Box>
  )
}

export default TodoPage