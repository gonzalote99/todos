import React, { useState, useEffect } from "react";
import Firebase from "./Firebase";

function Fre() {
    const [schools, setSchools] = useState([]);
    const [loading, setLoading] = useState(false);

    const ref = Firebase.firestore().collection("schools");
    
    function getSchools() {
        setLoading(true);
        ref.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setSchools(items);
            setLoading(false);
        });
    }

    useEffect(() => {
        getSchools();
    }, []);

    if (loading) {
        return <h1>loa..</h1>
    }

    return (
        <div>
            <h1>cosa</h1>
            {schools.map((school) => (
                <div key={school.id}>
                    <h2>{school.title}</h2>
                <p>{school.desc}</p>
              </div>
            ))}
        </div>
    );
}

export default Fre