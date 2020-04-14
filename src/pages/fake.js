import React, { useState } from "react";

// importing Components
import FakeProfileData from "../html/FakeProfileData";
import DisplayFakeData from "../components/DisplayFakeData";

const Fake = () => {
  const [fakeDataCount, setFakeDataCount] = useState([]);

  const getFakeData = (count) => {
    try {
      setFakeDataCount(Array.from({ length: count }));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <FakeProfileData getFakeData={getFakeData} />
      <div className="fakedata">
        {fakeDataCount.length
          ? fakeDataCount.map((singleFakeData, index) => (
              <DisplayFakeData key={`${Math.random()}-${index}`} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Fake;
