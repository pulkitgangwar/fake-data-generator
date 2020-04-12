import faker from "faker";

// importing components;
import DisplayComponent from "../components/DisplayComponent";
import DisplaySection from "../HTML/DisplaySection";

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
