
import OppContainer from './OppContainer';
import DropDown from './DropDown';

const OppList = ({ opps }) => {

    
  return (
    <div className="opportunities">
      {/* <SearchBar /> */}
      <DropDown />
      <OppContainer opps={opps} />
    </div>
  );
};

export default OppList;
