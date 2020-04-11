import React, { useState } from "react";

// importing Components
import DisplayFakeData from "./DisplayFakeData";
import Form from "./Form";

const FakeComponent = () => {
  const [fakeDataCount, setFakeDataCount] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getFakeData = (e, count) => {
    try {
      e.preventDefault();
      setLoading(true);

      setFakeDataCount(Array.from({ length: count }));
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
      setFakeDataCount([]);
    }
  };

  return (
    <div>
      <Form getFakeData={getFakeData} />
      <div>
        {error && !loading ? (
          <h1>
            Unable to Generate Data Please Refresh the Browser and Try Again !
          </h1>
        ) : null}
        {loading ? <h1>Loading ....</h1> : null}
        {fakeDataCount.length
          ? fakeDataCount.map(() => <DisplayFakeData />)
          : null}
      </div>
    </div>
  );
};

export default FakeComponent;
