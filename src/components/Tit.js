import React from 'react';
import ReactHtmlParser from 'react-html-parser';

import './styles/Tit.css'
import { Spring } from 'react-spring';


const html ='<div>fdgfgfgfgffd</div>';




 function Tit() {
        return (
            
            
            <div>
                 
            <div>{ReactHtmlParser(html) }</div>
            <div className="card">
            <h1>gfgfgf
            </h1> 
            </div>
           
            </div>
            
            
        )}
    

        export default Tit