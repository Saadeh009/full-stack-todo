import React from 'react';
import { useSelector } from "react-redux"
const TotalCompleteItems = () => {
	const todosLen = useSelector(state => state.todos.filter(s => s.completed).length)
	return <h4>Total Complete Items: {todosLen}</h4>;
};

export default TotalCompleteItems;
