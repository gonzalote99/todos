import React from 'react'

const MyContext = React.createContext();

function Men() {
    const [theme, setTheme] = React.useState("light");
    const nextTheme = theme === "light" ? "dark" : "light";

    const value = {
        theme,
        nextTheme,
        toggleTheme: () => {
            setTheme(nextTheme);
        }
    };

    return (

     <MyContext.Provider value={value}>
        <DirChild />
    </MyContext.Provider>
    );
}

const DirChild = React.memo(() => {
    console.log("DirChild")

    return ( <nav>
        <DepChild />
    </nav>
    );
});
const DepChild = () => {
    console.log("DepChild");
    const {nextTheme, toggleTheme} = React.useContext(MyContext);
    
    return <div>
        <button onClick={toggleTheme}>{nextTheme}</button>
    </div>
}

export default Men;