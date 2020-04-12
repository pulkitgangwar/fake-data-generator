import React from "react";
import faker from "faker";

const DisplayFakeData = () => {
  return (
    <div className="fakedata__box">
      <p>Name : {faker.name.findName()}</p>
      <p>Email : {faker.internet.email()}</p>
      <p>Username : {faker.internet.userName()}</p>
      <p>Password : {faker.internet.password()}</p>
   
    </div>
  );
};

export default DisplayFakeData;
