import { Box, Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import React, { useEffect } from 'react'
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';
import AddTodoForm from './components/AddTodoForm';
import { theme } from './theme';
const TodoPage = () => {
  const lightTheme = createTheme({
		palette: {
		  background:{
        default: '#F4F6FA'
      } 
		},
	  });
    // theme={lightTheme}
  return (
    <ThemeProvider theme={theme}> 
    <CssBaseline />
    <Box sx={{height: '100vh'}}>
    <Container>
        <Navbar />
        <TotalCompleteItems displayTodos={displayTodos} display={display} />
        <TodoList display={display} />
        <AddTodoForm />
    </Container>
    </Box>
    </ThemeProvider>
  )
}

export default TodoPage