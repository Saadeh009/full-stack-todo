import React, { useEffect } from 'react';
import TodoItem from './TodoItem';
import { useSelector, useDispatch } from "react-redux" 
import { getTodosAsync } from '../redux/todoSlice'
import { Box, Typography } from '@mui/material';
import { getUsersAsync } from '../redux/userSlice';
const TodoList = () => {
	const dispatch = useDispatch()
	const jwt = localStorage.getItem("jwt")
	const userId = localStorage.getItem("userId")
	useEffect(() => {
		dispatch(getTodosAsync({accessToken: jwt, userId: userId})) 
		dispatch(getUsersAsync())
		}, [dispatch])
	
	const users = useSelector(s => s.users)

	const todos = useSelector(state => {
		return state.todos
	} )
	return (
		<Box sx={{ height: '60vh', overflow: 'scroll' }}>
			{todos.length === 0 ? (
				<Typography variant='body1' color="primary.main" my={3}> Oops! You are not logged in </Typography>
			) : (
				todos.map((todo) => (
					<Box sx={{ my: 2 }} key={todo.id}>
						<TodoItem id={todo.id} title={todo.title} completed={todo.completed}/>
					</Box>
				))
			)}
		</Box>
	);
};

export default TodoList;
