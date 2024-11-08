import React, { useRef } from "react";

function ColorSet() {
  let colors = useRef();

  const toggles = () => {
    if (
      colors.current.style.backgroundColor === "" ||
      colors.current.style.backgroundColor === "pink"
    ) {
      colors.current.style.backgroundColor = "lightblue";
    } else if ((colors.current.style.backgroundColor = "lightblue")) {
      colors.current.style.backgroundColor = "pink";
    }
  };

  return (
    <div>
      <div ref={colors} style={{ height: "400px", border: "2px solid black" }}>
        <button style={{ margin: "200px" }} onClick={toggles}>
          Change Color
        </button>
      </div>
    </div>
  );
}

export default ColorSet;
