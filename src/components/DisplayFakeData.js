import React from "react";
import faker from "faker";

const DisplayFakeData = () => {
  return (
    <div>
      <p>Name : {faker.name.findName()}</p>
      <p>Email : {faker.internet.email()}</p>
      <p>Username : {faker.internet.userName()}</p>
      <p>Password : {faker.internet.password()}</p>
      <hr />
    </div>
  );
};

export default DisplayFakeData;
