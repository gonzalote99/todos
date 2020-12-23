import React from 'react'
import { Actions } from './Polo.js'

export default function Todo({ tod, dispatch }) {
    return (
        <div>
          <span style={{ color: tod.complete ? '#AAA' : '#000'}}>
              {tod.name}</span>  
              <button onClick={() => dispatch({ type: Actions.TOG_Todo, payload: { id:
            tod.id }})}>tog</button>
              <button onClick={() => dispatch({ type: Actions.DEL, payload: { id:
            tod.id }})}>del</button>
        </div>
    )
}
