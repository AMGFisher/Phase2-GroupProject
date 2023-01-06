import { FaPaintBrush } from "react-icons/fa";
import { RiCommunityFill } from "react-icons/ri";
import { FaRunning } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { GrWorkshop } from "react-icons/gr";
import { RiHeartPulseLine } from "react-icons/ri";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaDonate } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import DonationForm from "./DonationForm";
import VolunteerForm from "./VolunteerForm";
import { useState } from "react";

const OppCard = ({ opp }) => {
  const [volunteerOpen, setVolunteerOpen] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);

  function renderIcon(category) {
    switch (category) {
      case "Arts":
        return <FaPaintBrush />;
      case "Communities and Neighbors":
        return <RiCommunityFill />;
      case "Culture":
        return <FaGlobeAmericas />;
      case "Economic and Workforce Development":
        return <GrWorkshop />;
      case "Education":
        return <FaGraduationCap />;
      case "Health and Well-Being":
        return <RiHeartPulseLine />;
      case "Sports":
        return <FaRunning />;
    }
  }

  return (
    <div className="card">
      {renderIcon(opp.category)}
      <h3>{opp.position}</h3>
      <h5>
        <a href={opp.website}>{opp.organization}</a>
      </h5>
      <p className="card-p">{opp.summary}</p>
      <p>
        {opp.address}, {opp.city}, {opp.state} {opp.postcode}
      </p>
      <button
        onClick={() => {
          setVolunteerOpen(!volunteerOpen);
        }}
      >
        {" "}
        <BiMailSend /> Volunteer{" "}
      </button>
      {volunteerOpen ? <VolunteerForm opp={opp} /> : null}
      <br />
      <button
        onClick={() => {
          setDonateOpen(!donateOpen);
        }}
      >
        {" "}
        <FaDonate /> Donate{" "}
      </button>
      {donateOpen ? <DonationForm opp={opp} /> : null}
    </div>
  );
};

export default OppCard;
