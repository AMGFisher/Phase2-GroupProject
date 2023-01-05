import { FaPaintBrush } from 'react-icons/fa'
import { RiCommunityFill } from 'react-icons/ri'
import { FaRunning } from 'react-icons/fa'
import { FaGraduationCap } from 'react-icons/fa'
import { GrWorkshop } from 'react-icons/gr'
import { RiHeartPulseLine } from 'react-icons/ri'
import { FaGlobeAmericas } from 'react-icons/fa'
import { FaDonate } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'


const OppCard = ({ opp }) => {

    function renderIcon(category) {
        switch (category) {
            case 'Arts':
                return <FaPaintBrush />;
            case 'Communities and Neighbors':
                return <RiCommunityFill />;
            case 'Culture':
                return <FaGlobeAmericas />;
            case 'Economic and Workforce Development':
                return <GrWorkshop />;
            case 'Education':
                return <FaGraduationCap />;
            case 'Health and Well-Being':
                return <RiHeartPulseLine />;
            case 'Sports':
                return <FaRunning />;
        }
    }

    return (
        <div className="card">
            {renderIcon(opp.category)}
            <h3>{opp.position}</h3>
            <h5><a href={opp.website}>{opp.organization}</a></h5>
            <p>{opp.summary}</p>
            <p>{opp.address}, {opp.city}, {opp.state} {opp.postcode}</p>
            <button> <BiMailSend /> Volunteer </button>
            <button> <FaDonate /> Donate </button>
        </div>
    )
}

export default OppCard;