const DropDown = ({setCategory}) =>{
    return (
        <form>
            <select onChange={(e)=> setCategory(e.target.value)}>
                <option >All</option>
                <option>Arts</option>
                <option>Communities and Neighbors</option>
                <option>Culture</option>
                <option>Economic and Workforce Development</option>
                <option>Education</option>
                <option>Health and Well-Being</option>
                <option>Sports</option>
            </select>
        </form>
    )
}
export default DropDown