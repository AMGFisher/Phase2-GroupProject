import OppContainer from "./OppContainer"
import About from "./About"

const Home = ({opps}) => {



    return(
        <>
        <h1>Home!</h1>
        <OppContainer opps={opps} />
        <About />
        </>
    )
}

export default Home