const OppCard = ({opp}) => {

    return(
        <div className="card">
            <h3>{opp.position}</h3>
            <h5>{opp.organization}</h5>
            <p>{opp.summary}</p>
            <p>{opp.address}, {opp.city}, {opp.state} {opp.postcode}</p>
        </div>
    )
}

export default OppCard;