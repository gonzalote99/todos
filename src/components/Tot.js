import React from 'react';

class Tot extends React.Component {
    render () {
        return (
            <React.Fragment>
                <h1>{this.props.ser}</h1>
                <a href={this.props.url}>aca</a>
            </React.Fragment>
        )
    }
}
export default Tot