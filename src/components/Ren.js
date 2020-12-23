import React from 'react'
import { Spring } from 'react-spring/renderprops';

export default function Ren() {
    return (
       <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
       >
           {props => (
               <div style={props}>

               

      
       
        <div style={loc}>
            <h1>algfgfgfgf</h1>
            <p>asa
                ghgh
                hfhf
            </p>
            <Spring
              from={{ number: 0 }}
              to={{ number: 10 }}
            > 
            {props => (
                <div style={props}>
                    <h1 style={con}>
                        {props.number}
                    </h1>

                </div>
           )

            }

            </Spring>
        </div>
        </div>
           )}
        </Spring>
    )
}

const loc = {
    color: 'red',
    background: 'blue',
    padding: '1.5rem'
} 

const con = {
    background: '#333',
    textAlign: 'center',
    width: '100px',
    borderRadius: '50%',
    margin: '1rem auto'
};