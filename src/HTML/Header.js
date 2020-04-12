const Header = () => {
  return (
    <header className="header">
      <p className="paragraph-primary paragraph-primary--primaryColor">
        Build Using Faker
      </p>
      <h1 className="heading-primary">
        Fake Users{" "}
        <span className="custom-span custom-span--primaryColor">Data</span>{" "}
        <br />
        Generator
      </h1>
      <p className="paragraph-primary header__paragraph">
        Generate Random Fake Data Or User Profile Using Fake Profile Data,
        <br /> You Can Create Thousands Of User Profile For Testing Purpose
      </p>
      <div className="header__btn--wrapper">
      <button className="btn btn--primary">Generate Fake Data </button>
      </div>
    </header>
  );
};

export default Header;
