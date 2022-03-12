import React, { useMemo, useState } from "react";

export default function () {
  let [value, setValue] = useState(1);
  let [theme, setTheme] = useState("");
  let [number, setNumber] = useState(0)

  const fibonacci = (num) => {
    if (num !== "") {
      let sum = 0;
      let [n1, n2] = [0, 1];
      let nextNum;
      for (let i = 0; i < num; i++) {
        sum += n1;
        nextNum = n1 + n2;
        n1 = n2;
        n2 = nextNum;
      }
      return sum;
    } else {
      return "invalid number";
    }
  };

  const memoizedVal = useMemo(() => fibonacci(number), [number]);
  

  const mood = (theme) => {
    if (theme === "white") {
      setTheme("black");
      
    } else {
      setTheme("white");
    }
  };

  return (
    <div style={{ backgroundColor: theme,marginTop:"30px",marginBottom:"100px",height:"180px" ,color:"blue" }}>
      <div>
        <label>{memoizedVal}</label>
      </div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => mood(theme)}>Theme</button>
      <div>
        <button onClick={() => setNumber(value)}>Calculate Fibo</button>
      </div>
    </div>
  );
}
