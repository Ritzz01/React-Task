import React, { useRef, useState } from "react";

function ColorPicker() {
  const [red, setRed] = useState();
  const [blue, setBlue] = useState();
  const [green, setGreen] = useState();

  let colors = useRef();

  const one = (e) => {
    let a = e.target.value;
    if (0 < a && a < 256) {
      setRed(a);
      console.log(a);
    } else {
      console.log("enter between 1-255");
    }
  };

  const two = (e) => {
    let a = e.target.value;
    if (0 < a && a < 256) {
      setBlue(a);
      console.log(a);
    } else {
      console.log("enter between 1-255");
    }
  };

  const three = (e) => {
    let a = e.target.value;
    if (0 < a && a < 256) {
      setGreen(a);
      console.log(a);
    } else {
      console.log("enter between 1-255");
    }
  };

  const changeColor = () => {
    let a = `rgb(${red}, ${green}, ${blue})`;
    colors.current.style.backgroundColor = a;
    console.log(a);
  };

  const randomColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let a = `rgb(${r}, ${g}, ${b})`;
    colors.current.style.backgroundColor = a;
    console.log(a);
  };

  return (
    <div>
      <div
        ref={colors}
        style={{
          height: "100px",
          width: "100px",
          border: "2px solid black",
          margin: "14px",
        }}
      ></div>
      <br />

      <label htmlFor="">Red</label>
      <input type="number" onChange={one} value={red} />
      <br />
      <label htmlFor="">Blue</label>
      <input type="number" onChange={two} value={blue} />
      <br />
      <label htmlFor="">Green</label>
      <input type="number" onChange={three} value={green} />
      <br />
      <br />

      <button onClick={changeColor}>Generate Rgb</button>

      <br />
      <button onClick={randomColor}>Generate Random</button>
    </div>
  );
}

export default ColorPicker;
