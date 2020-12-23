import React, {useEffect} from "react";
import {useHistory} from 'react-router-dom'; 

const Ton = () => {
    const history = useHistory();

    useEffect(() => {

        history.path("/polpo")

    }, []);
    return (
        <div> estre</div>
    );
};

export default Ton;