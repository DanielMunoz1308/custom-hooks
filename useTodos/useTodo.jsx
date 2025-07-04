



import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
//import { TodoList } from '../08-useReducer/TodoList';

const InitialState = []
const init = () => {
    return JSON.parse( localStorage.getItem('todolist')) || [];
}


export const useTodo = () => {
  const [todolist, dispatch] = useReducer(todoReducer, InitialState, init)

    useEffect(() => {
    localStorage.setItem('todolist', JSON.stringify(todolist));
    }, [todolist])


    const handleNewTodo = (todo) => {
        const action = {
            type: '[ TODO ] Add Todo',
            payload: todo
        }
        dispatch( action );
    }

    const handleDeleteTodo = (id) =>{
        dispatch({
            type: '[ TODO ] Remove Todo',
            payload: id
        })

    }

    const handleToggleTodo = (id) =>{
        dispatch({
            type: '[ TODO ] Toggle Todo',
            payload: id
        })
    }

    const todosCount = todolist.length;
    const pendingTodosCount = todolist.filter(todo => !todo.done).length;
  
  
  
  
    return {
    todolist,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    todosCount,
    pendingTodosCount
    };
}
