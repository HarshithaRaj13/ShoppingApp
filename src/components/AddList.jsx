// import React, { useState } from "react";

// export const AddList = () => {
//   const [name, setName] = useState("");
//   const addListNames = () => {
//     setName([...name]);
//   };
//   return (
//     <div>
//       {Array.isArray(name) &&
//         name.map((element, index) => {
//           return <li key={index + 1}>{element}</li>;
//         })}
//       <input
//         name="name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <button onClick={addListNames}> Add </button>
//     </div>
//   );
// };
