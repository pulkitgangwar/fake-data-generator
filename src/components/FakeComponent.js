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
    <>
      <Form getFakeData={getFakeData} />
      <div>
        {loading ? (
          <h1>Loading ...</h1>
        ) : error && !loading ? (
          <h1>Problem Please Refresh Data</h1>
        ) : fakeDataCount.length ? (
          fakeDataCount.map((singleFakeData, index) => (
            <DisplayFakeData key={`${Math.random()}-${index}`} />
          ))
        ) : null}
        {/* {error && !loading ? (
          <h1>
            Unable to Generate Data Please Refresh the Browser and Try Again !
          </h1>
        ) : null}
        {loading ? <h1>Loading ....</h1> : null}
        {fakeDataCount.length
          ? fakeDataCount.map((singleFakeData, index) => (
              <DisplayFakeData key={`${Math.random()}-${index}`} />
            ))
          : null} */}
      </div>
    </>
  );
};

export default FakeComponent;
