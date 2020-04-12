import React, { useState } from "react";

const DisplayComponent = ({ fakerFunction, title }) => {
  const [random, setRandom] = useState("");

  return (
    <div className="displaysection__displaycomponent">
      <button
        className="btn btn--primary"
        onClick={() => setRandom(fakerFunction())}
      >
        Generate
      </button>
      <div className="displaysection__result-container">
        <p className="paragraph-primary displaysection__result-container--heading">
          {random ? random : title}
        </p>
      </div>
    </div>
  );
};

export default DisplayComponent;
