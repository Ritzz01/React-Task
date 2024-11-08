import React, { useRef } from 'react';

function ColorText() {
  const text = useRef();

  function changeColor(color) {
    text.current.style.color = color;
  }

  return (
    <div>
      <input ref={text} type="text" placeholder="Enter text" />
      <br />
      <br />
      <button onClick={() => changeColor('red')}>Red</button>
      <br />
      <button onClick={() => changeColor('blue')}>Blue</button>
      <br />
      <button onClick={() => changeColor('green')}>Green</button>
    </div>
  );
}

export default ColorText;
