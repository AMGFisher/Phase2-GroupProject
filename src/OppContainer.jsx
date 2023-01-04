import OppCard from './OppCard'

const OppContainer = ({opps}) => {
    
    return(
        <>
        <h3>Opp Container</h3>
        {opps.map((opp)=>{
            return(
                <ul>
                <OppCard key={opp.key} opp={opp} />
                </ul>
            )
        })}
        </>
    )
}

export default OppContainer