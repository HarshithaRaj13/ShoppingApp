import React, { useRef } from "react";
function Lstore() {
  const data = useRef();
  const handleClick = () => {
    console.log(data.current.value, "initial value");
    localStorage.setItem("inputValue", data.current.value);
  };
  console.log(localStorage.getItem("inputValue"), "****");
  return (
    <div>
      <div>
        <input ref={data} />
      </div>
      <button onClick={handleClick}>add</button>
    </div>
  );
}

export default Lstore;
