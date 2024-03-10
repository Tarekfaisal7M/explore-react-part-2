import { useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        const newCount = count + 1;
        setCount(newCount);

    }
    const handleAdd2 = () => {
        const newCount = count - 1;
        setCount(newCount);

    }
    return (
        <div style={{border:'2px solid tomato'}}>
            <h2>Counter :{count}</h2>
            <button onClick={handleAdd}>add</button>
            <button onClick={handleAdd2}>Reduce</button>
        </div>
    )
}