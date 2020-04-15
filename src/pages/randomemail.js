import faker from "faker";

// importing components;
import DisplaySection from "../components/DisplaySection";

const RandomEmail = () => {
  return (
    <>
      <DisplaySection
        title="Generate random"
        primaryText="Email"
        fakerFunction={faker.internet.email}
      />
    </>
  );
};

export default RandomEmail;
