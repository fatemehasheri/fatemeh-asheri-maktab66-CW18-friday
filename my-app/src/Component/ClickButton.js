import React, {useMemo ,useState }from 'react';


const Clickbutton = () => {
    const [text ,setText] =useState("")
    const [count,setCount] = useState(0)
    const instance =useMemo(()=>{return `${count}`},[count])
    return (
        <div>
            <div >
                <h3 style={{color: 'green'}}>Click button</h3>
            </div>
            <div >
            <label>{text}{count}</label>
            </div>
            <input value={text} onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => setCount(count+1)}>click me</button>
        </div>
    );
}

export default Clickbutton;
