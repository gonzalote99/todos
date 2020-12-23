import React from 'react';

class Inc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            con : 1
        }
    }
    inc = () => {
        this.setState({ con: this.state.con + 2 });
    }

    inco = () => {
        this.setState({ con: this.state.con - 1 });
    }
     
   render () {
       return (
           <div >
           <button onClick={this.inc} className="con">d</button>
           <button onClick={this.inco} className="con">p</button>
           <h2>{this.state.con}</h2>
           </div>
       );
   }
}
export default Inc;