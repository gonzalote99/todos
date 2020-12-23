import React from "react";
import { Usere } from "../Usere";

export const Ras = React.memo(({ increment }) => {
    Usere();
    
    return <button onClick={() => increment(3)}>ol</button>;
});

export default Ras