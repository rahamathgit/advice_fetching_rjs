import "./App.css";
import React, { useEffect, useState } from "react";

const App = () => {

const [advice, setAdvice] = useState("Please Click the below Button today's Advice");
const [count, setCount] = useState(0);

async function getJokes(){
    const update = await fetch("https://api.adviceslip.com/advice");
    const data = await update.json();
    
    setAdvice(data.slip.advice);
    setCount((c)=>c+1);
}

useEffect(function() {
    getJokes();
}, [])

    return(
        <div className="parent">
            <h1>{advice}</h1>
            <button onClick={getJokes}>Get Advice</button>
            <p>You have read <b>{count}</b> pieces of advice</p>
        </div>
    )
}

export default App;