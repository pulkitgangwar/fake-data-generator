import React, { useState } from "react";

// importing Components
import FakeProfileData from "../HTML/FakeProfileData";
import FakeData from "../HTML/FakeData";

const Fake = () => {
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
      <FakeProfileData getFakeData={getFakeData} />
      <FakeData loading={loading} error={error} fakeDataCount={fakeDataCount} />
    </div>
  );
};

export default Fake;
