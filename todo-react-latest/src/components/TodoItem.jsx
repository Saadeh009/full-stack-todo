import React from 'react';
import { completedTodoAsync, deleteTodo, deleteTodoAsync, toggleComplete } from '../redux/todoSlice';
import { useDispatch } from "react-redux"
import { Box, Checkbox, Paper, Typography } from '@mui/material';
import Delete from '@mui/icons-material/Delete';
const TodoItem = ({ id, title, completed, accessToken }) => {
	const dispatch = useDispatch()
	const jwt = localStorage.getItem("jwt")
	const userId = localStorage.getItem("userId")
	return (
		<Box sx={{display: 'flex', alignItems: 'center'}}>
				<Checkbox checked={completed} sx={{color: "#B4B4B4",'&.Mui-checked': {color: '#29ABE2'}, '& .MuiSvgIcon-root': { fontSize: 28 } }} onChange={() => dispatch(completedTodoAsync({id: id, completed: !completed, accessToken: jwt, userId: userId}) )} />
				<Typography variant='body1' color='primary' sx={{flexGrow: 1}}>
				{title}
				</Typography>
			<Delete onClick={() => dispatch(deleteTodoAsync({id: id, accessToken: jwt, userId: userId}) )} sx={{color: '#8C8E93', fontSize: 36, ':hover': {cursor: 'pointer'}}} />
		</Box>
	);
};

export default TodoItem;
