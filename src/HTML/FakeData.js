import DisplayFakeData from "../components/DisplayFakeData";

const FakeData = ({ loading, error, fakeDataCount }) => {
  return (
    <div className="fakedata">
      {loading ? (
        <h1>Loading ...</h1>
      ) : error && !loading ? (
        <h1>Problem Please Refresh Data</h1>
      ) : fakeDataCount.length ? (
        fakeDataCount.map((singleFakeData, index) => (
          <DisplayFakeData key={`${Math.random()}-${index}`} />
        ))
      ) : null}
    </div>
  );
};

export default FakeData;
