import React, { useState } from "react";

const Form = ({ getFakeData }) => {
  const [count, setCount] = useState(1);

  const runFakeData = (e) => {
    e.preventDefault();
    getFakeData(e, count);
    console.log("running");
  };

  return (
    <form className="form" onSubmit={runFakeData}>
      <input
        className="form__input form__input--count"
        type="number"
        value={count}
        name="count"
        onChange={(e) => setCount(e.target.value)}
        placeholder="Enter The Count For Data"
      />
      <div className="form__btn--wrapper">
        <button type="submit" className="form__btn btn btn--primary">
          Get Data
        </button>
      </div>
    </form>
  );
};

export default Form;
