import OppCard from './OppCard'

const OppContainer = ({opps}) => {
    
    return(
        <div className='container'>
        <h2>Opportunities in NYC</h2>
        {opps.map((opp)=>{
            return(
                <div key={opp.id}>
                <OppCard opp={opp} />
                </div>
            )
        })}
        </div>
    )
}

export default OppContainer