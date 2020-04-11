import React, { useState } from "react";

const DisplayComponent = ({ title, fakerFunction }) => {
  const [random, setRandom] = useState("");

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={() => setRandom(fakerFunction())}>
        Generate {title}
      </button>
      <h1>{random ? random : null}</h1>
    </div>
  );
};

export default DisplayComponent;
