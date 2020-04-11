import faker from "faker";

// importing components;
import DisplayComponent from "../components/DisplayComponent";

const RandomEmail = () => {
  return (
    <DisplayComponent
      title="Random Email"
      fakerFunction={faker.internet.email}
    />
  );
};

export default RandomEmail;
