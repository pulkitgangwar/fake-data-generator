import faker from "faker";

// importing components
import DisplayComponent from "../components/DisplayComponent";
import DisplaySection from "../html/DisplaySection";

const RandomPassword = () => {
  faker.seed(123);
  return (
    <DisplaySection
      title="Generate Random"
      primaryText="Password"
      fakerFunction={faker.internet.password}
    />
  );
};

export default RandomPassword;
