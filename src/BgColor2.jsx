import React, { useEffect, useRef, useState } from "react";

function BgColor2() {
  const [count, setCount] = useState(0);
  let colors = useRef();

useEffect(()=> {
    if (count < 0) {
      colors.current.style.backgroundColor = "black";
      colors.current.style.color = "white";
    } else if (count == 0) {
      colors.current.style.backgroundColor = "white";
    } else if (count > 0) {
      colors.current.style.backgroundColor = "red";
      colors.current.style.color = "white";
    }
  },[count])

  return (
    <div ref={colors} style={{height:'1000px'}} >
     
        <button onClick={() => setCount(count + 1)}>+</button>
        <span>{count}</span>
        <button onClick={() => setCount(count - 1)}>-</button>
   
    </div>
  );
}

export default BgColor2;
