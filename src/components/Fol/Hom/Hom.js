import React, {useContext} from 'react';
import { Uscon } from '../../../Uscon';

const Hom = () => {

    const { user } = useContext(Uscon);
    return ( 
    <div>
    <h1>kio</h1>
    <pre>{JSON.stringify(user, null, 2)}</pre>
    
    </div>
    );
}

export default Hom;