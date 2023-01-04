import CategoryContainer from "./CategoryContainer"
import About from "./About"
import {useState,useEffect} from 'react'

const Home = () => {



    return(
        <>
        <h1>Home!</h1>
        <CategoryContainer />
        <About />
        </>
    )
}

export default Home