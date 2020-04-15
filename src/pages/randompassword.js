import faker from "faker";

// importing components
import DisplaySection from "../components/DisplaySection";

const RandomPassword = () => {
  return (
    <DisplaySection
      title="Generate Random"
      primaryText="Password"
      fakerFunction={faker.internet.password}
    />
  );
};

export default RandomPassword;
