import React from 'react';
import './Todo.css';
import TodoItem from './TodoItem';

const TodoList = ({lineThrough, todos, removeItem}) => {
    return (
            todos.map(item => {
                return <TodoItem key={item.id} removeItem={removeItem} /* lineThrough={lineThrough} */ {...item}/>
            })
         );
     
 }

export default TodoList;