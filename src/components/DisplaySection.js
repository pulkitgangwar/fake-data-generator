import React, { useState } from "react";

const DisplaySection = ({ title, primaryText, fakerFunction }) => {
  const [random, setRandom] = useState("");
  return (
    <section className="displaysection">
      <h1 className="heading-primary">
        {title} <br />{" "}
        <span className="custom-span custom-span--primaryColor">
          {primaryText}
        </span>
      </h1>

      {/* DISPLAY COMPONENT */}
      <div className="displaysection__displaycomponent">
        <button
          className="btn btn--primary"
          onClick={() => setRandom(fakerFunction())}
        >
          Generate
        </button>
        <div className="displaysection__result-container">
          <p className="paragraph-primary displaysection__result-container--heading">
            {random ? random : primaryText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default DisplaySection;
