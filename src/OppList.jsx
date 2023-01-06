import OppContainer from "./OppContainer";
import DropDown from "./DropDown";
import SearchBar from "./SearchBar";
import { useState } from "react";

const OppList = ({ opps }) => {
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="opportunities">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <DropDown category={category} setCategory={setCategory} />
      <OppContainer opps={opps} category={category} searchTerm={searchTerm} />
    </div>
  );
};

export default OppList;
