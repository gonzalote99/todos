import React, { useState, useEffect } from 'react';
import DocAu from './DocAu';
import '../styles/Aumen.css'

export default function Aumen() {
    const { count, inc, dec} = DocAu();
    return (
        <div>
        <p>{count}</p>
        <div className="tol">
            <button  onClick={() => inc()}>i</button>
            <button onClick={() => dec()}>m</button>
            <h2>pol</h2>

        </div>
       </div> 

    );
}