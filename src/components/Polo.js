import React, { useReducer, useState } from 'react'
import Todo from './Todo.js'

export const Actions = {
    A_Todo: 'a-todo',
    TOG_Todo: 'tog-todo',
    DEL: 'del'

    
}

function reducer(todo, action) {
    switch (action.type) {
        case Actions.A_Todo:
            return [...todo,newTodo(action.payload.name)]
        case Actions.TOG_Todo:  
        return todo.map(tod => {
            if (tod.id === action.payload.id) {
                return { ...tod, complete: !tod.complete }
            }
            return tod
        })  
        case Actions.DEL:  
        return todo.filter(tod => tod.id !== action.payload.id)
        
        default: 
        return todo
    }
    
}
function newTodo(name) {
    return { id: Date.now(), name: name, complete: false}
}

export default function Polo() {
    const [todo, dispatch] = useReducer(reducer, [])
    const [name, setName] = useState('')
    

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: Actions.A_Todo, payload: { name: name} })
        setName('')
    }
    
    
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName
            (e.target.value)} />
        </form>
        {todo.map(tod => {
           return <Todo key={tod.id} tod={tod} dispatch={dispatch} />

        })}
        </>
    )
}