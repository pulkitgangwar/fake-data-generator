import React, { useState } from "react";

const Form = ({ getFakeData }) => {
  const [count, setCount] = useState(1);

  return (
    <form className="form" onSubmit={(e) => getFakeData(e, count)}>
      <input
        className="form__input form__input--count"
        type="text"
        value={count}
        name="count"
        onChange={(e) => setCount(e.target.value)}
      />
      <button type="submit" className="form__btn">
        Get Data
      </button>
    </form>
  );
};

export default Form;