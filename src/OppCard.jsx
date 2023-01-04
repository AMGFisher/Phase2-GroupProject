const OppCard = ({opp}) => {

    return(
        <li>
            <h3>{opp.Position}</h3>
            <h5>{opp.Organization}</h5>
            <p>{opp.Summary}</p>
            <p>{opp.Address} {opp.City} {opp.State} {opp.Postcode}</p>
        </li>
    )
}

export default OppCard;