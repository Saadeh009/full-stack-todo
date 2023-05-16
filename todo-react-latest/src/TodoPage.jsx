import { Box, Container } from '@mui/material';
import React, { useEffect } from 'react'
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import AddTodoForm from './components/AddTodoForm';

const TodoPage = () => {
  return (
    <Box  sx={{height: '100vh'}}>
    <Container>
        <Navbar />
        <TodoList />
        <AddTodoForm />
    </Container>
    </Box>
  )
}

export default TodoPage