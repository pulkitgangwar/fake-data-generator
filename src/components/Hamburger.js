const Hamburger = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <div className="hamburger" onClick={() => setIsNavOpen(!isNavOpen)}>
      Ham
    </div>
  );
};

export default Hamburger;
