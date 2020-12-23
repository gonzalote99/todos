import React, {useContext} from 'react';
import { Uscon } from '../../../Uscon';
import { login } from '../../login';


export default function Abo  ()  {
    const { user, setUser} = useContext(Uscon)
    return (
        <div>
    <h1>ñ</h1>
    <pre>{JSON.stringify(user, null, 2)}</pre>
    {user ? (
        <button onClick={() => {
          setUser(null)
        }}>sal</button>
    ) : (
    <button
     onClick={async () => {
         const user = await login();
         setUser(user);
        }}
        >
        dsds
        </button>
    
    )}
    </div>

    );
}

