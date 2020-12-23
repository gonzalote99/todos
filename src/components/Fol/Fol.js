import React, { useState, useMemo } from 'react';
import { Route, Switch, Link, NavLink } from 'react-router-dom';
import { Uscon } from '../../Uscon';


import Abo from './Abo';
import Hom from './Hom';


const pgn = () =>(
    <div>dgfd</div>
)

const Fol = () => {
    const [user, setUser] = useState(null);

    const value = useMemo(() => ({ user, setUser }), [user, setUser]);
    return (
        <div>
            <strong>pri</strong>
            <NavLink to="/" activeClassName="current">Hom</NavLink>{" "}
            <Link to="/lo">Abo</Link>
            <Uscon.Provider value={ value }>
            
            <Route component={Hom} exact path="/" />
            <Route component={Abo} path="/lo" />
            <Route component={pgn} />
            
            </Uscon.Provider>
            
             
        </div>
    )
};
export default Fol;