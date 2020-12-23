import React from "react";



export default class Bus extends React.Component {
    

    state = {
      load: true,
      pers: null
    }

    async componentDidMount() {
        const url = "https://api.randomuser.me/";
        const resp = await fetch(url);
        const data = await resp.json();
        this.setState({ pers: data.results[0], load: false });

    }

    render() {
        return (
        <div>
            {this.state.load || !this.state.pers ? (
                 <div>loa..</div>
            ) : (
                 <div>
                     <div>{this.state.pers.name.first}</div>
                     <div>{this.state.pers.name.last}</div>
                     <img src={this.state.pers.picture.large} />
                 </div>
            )}
            </div>
            );
    }
} 