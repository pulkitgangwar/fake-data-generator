import DisplayComponent from "../components/DisplayComponent";

const DisplaySection = ({ title, primaryText, fakerFunction }) => {
  return (
    <section className="displaysection">
      <h1 className="heading-primary">
        {title} <br />{" "}
        <span className="custom-span custom-span--primaryColor">
          {primaryText}
        </span>
      </h1>
      <DisplayComponent fakerFunction={fakerFunction} title={primaryText} />
    </section>
  );
};

export default DisplaySection;
