import React from 'react'
import PropTypes from 'prop-types'

class Alg extends React.Component {
    render() {
        return (
            <h1>dsds {this.props.sol}</h1>
        );
    }
}
Alg.defaultProps = {
    sol: 'lok'
};

export default Alg