// importing Components
import Form from "../components/Form";

const FakeProfileData = ({getFakeData}) => {
  return (
    <section className="fakeprofiledata">
      <h1 className="heading-primary fakeprofiledata__heading">
        Generate Fake{" "}
        <span className="custom-span custom-span--primaryColor">Profile</span>
      </h1>
      <p className="paragraph-secondary">
        Enter The Number Of Profiles You Need
      </p>
      <Form getFakeData={getFakeData} />
    </section>
  );
};

export default FakeProfileData;
