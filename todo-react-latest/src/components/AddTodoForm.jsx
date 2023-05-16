import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux"
import { addTodoAsync } from '../redux/todoSlice'
import { Box, FormControl, TextField, Button, InputAdornment } from '@mui/material';
import { StyledTextField } from './StyledTextField';
const AddTodoForm = () => {
	const [value, setValue] = useState('');
	const jwt = localStorage.getItem("jwt")
	const userId = localStorage.getItem("userId")
	const dispatch = useDispatch();
	const onSubmit = (event) => {
		event.preventDefault()
		dispatch(addTodoAsync({title: value, accessToken: jwt, userId: userId}))
		setValue("")
	};
	return (
		<>
		<form onSubmit={onSubmit}>
			<StyledTextField fullWidth sx={{ my: 2 }} inputProps={{sx: { height: 50}}} value={value} onChange={(event) => setValue(event.target.value)} placeholder="New note" variant="outlined"InputProps={{
				endAdornment: (
					<InputAdornment position="end">
              <Button variant="contained" type='submit' sx={{textTransform:'unset'}}>Add new note</Button>
            </InputAdornment>
          ),}} />
		</form>
		</>
	);
};

export default AddTodoForm;