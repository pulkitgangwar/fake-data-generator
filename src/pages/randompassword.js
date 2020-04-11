import faker from "faker";

// importing components
import DisplayComponent from "../components/DisplayComponent";

const RandomPassword = () => {
  faker.seed(123);
  return (
    <DisplayComponent
      title="random Password"
      fakerFunction={faker.internet.password}
    />
  );
};

export default RandomPassword;
