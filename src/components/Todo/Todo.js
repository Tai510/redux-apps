import React, { useState, useEffect } from 'react';
import TodoForm from '../Todo/TodoForm';
import TodoList from '../Todo/TodoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { todoData } from '../../actions';
import './Todo.css';
import axios from 'axios';

const Todo = (props) => {

    const [todos, setTodos] = useState([/* props.todo */]);
    const [todo, setTodo] = useState('');
    
    useEffect(() => {
        axios.get('http://localhost:4000/todos')
            .then(res => {
                setTodos(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [todo])

    

    const addItem = (item) => {
        axios.post('http://localhost:4000/todos', { item, id: Date.now() , complete: false })
        .then(res => {
            console.log('res from post', res)
            res && setTodo({...todos},res)
        })
        .catch(err => {
            console.log(err)
        })

        const newTodos = [...todos, {item, id: Date.now(), complete: false}];
        setTodos(newTodos);
    }


    const removeItem = (id) => {
        axios.delete(`http://localhost:4000/todos/${id}`, id)
        setTodos(todos.filter(item => item.id !== id))
    }

      // const lineThrough = (id) => {
    //     setTodos(todos.map(item => {
    //         if (item.id === id) {
    //             return ({ ...item, complete: !item.complete })
    //         }
    //         else {
    //             return item
    //         }
    //     }))
    // }


    return (
        <div className='Todo'>
            <TodoForm addItem={addItem} removeItem={removeItem} />
            <div className='todo-list'>
                <TodoList removeItem={removeItem} todos={todos} /* lineThrough={lineThrough} */ />
            </div>

        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        todo: state.todo,
    };
};

function matchDispatchToProps(dispatch) {
    return bindActionCreators({ todoData: todoData }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Todo);
