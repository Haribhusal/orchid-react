import React, { useState } from "react";

const Dropdown = () => {
  const [number, setNumber] = useState(0);
  //   State Variable

  //   let number = 10;

  //   const setNUmber = (oldnumber) => {
  //     let newNumber = oldnumber + 1;
  //     return newNumber;
  //   };

  return (
    <div>
      <div>{number}</div>
      <button
        className="bg-green-600  active:bg-orange-600 text-white px-5 py-3 rounded-lg"
        onClick={() => setNumber(number + 1)}
      >
        ChangeNumber
      </button>
    </div>
  );
};

export default Dropdown;
