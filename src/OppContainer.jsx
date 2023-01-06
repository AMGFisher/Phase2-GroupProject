import OppCard from "./OppCard";

const OppContainer = ({ opps, category, searchTerm }) => {
  const categoryFilteredOpps = opps.filter((opp) => {
    if (category === "All") {
      return true;
    } else {
      return opp.category.toLowerCase() === category.toLowerCase();
    }
  });

  const filteredOpps = categoryFilteredOpps.filter((opp) => {
    return (
      opp.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      opp.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="container">
      <h2 className="form-title">Opportunities in NYC</h2>
      {filteredOpps.map((opp) => {
        return (
          <div key={opp.id}>
            <OppCard opp={opp} />
          </div>
        );
      })}
    </div>
  );
};

export default OppContainer;
