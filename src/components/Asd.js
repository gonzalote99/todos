import React, { Component } from 'react';
import { Spring } from 'react-spring/renderprops';

export class Asd extends Component {
    render() {
        return (
            <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        config={{ delay: 1000, duration: 1000 }}
       >
           {props => (
               <div style={props}>

               

      
       
        <div style={loce}>
            <h1>algfgfgfgf</h1>
            <p>asae
                ghgh
                hfhf
            </p>
            <button style={btn} onClick={this.props.toggle}>apret</button>
           
        </div>
        </div>
           )}
        </Spring>
        )
    }
}

const loce = {
    color: 'red',
    background: 'slateblue',
    padding: '1.5rem'
} 

const btn = {
    background: '#333',
    color: '#fff',
    padding: '1rem 2 rem'
}



export default Asd
