import React, { useState } from "react";

// importing Components
import DisplayFakeData from "../components/DisplayFakeData";
import Form from "../components/Form";

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
    <>
      <section className="fakeprofiledata">
        <h1 className="heading-primary fakeprofiledata__heading">
          Generate Fake{" "}
          <span className="custom-span custom-span--primaryColor">Profile</span>
        </h1>
        <p className="paragraph-secondary">
          Enter The Number Of Profiles You Need
        </p>
        <Form getFakeData={getFakeData} />
      </section>

      <div className="fakedata">
        {fakeDataCount.length
          ? fakeDataCount.map((singleFakeData, index) => (
              <DisplayFakeData key={`${Math.random()}-${index}`} />
            ))
          : null}
      </div>
    </>
  );
};

export default Fake;
