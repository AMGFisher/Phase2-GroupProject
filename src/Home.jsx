import OppContainer from "./OppContainer"
import About from "./About"
import {useState,useEffect} from 'react'

const Home = () => {

    const [opps,setOpps] = useState([])
    
    const fetchOpps = async () => {
        const req = await fetch('http://localhost:3000/opportunities')
        const res = await req.json()
        console.log(res)
        setOpps(res)
    }

    useEffect(()=>{
        fetchOpps()
    },[])

    return(
        <>
        <h1>Home!</h1>
        <OppContainer opps={opps} />
        <About />
        </>
    )
}

export default Home