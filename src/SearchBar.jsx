const SearchBar = ({searchTerm,setSearchTerm}) => {
    return (
        <div>
            <form>
                <input type="text" className="search-bar"
                placeholder="Search: Opportunity or Summary"
                    value={searchTerm}
                    onChange={(e)=>{
                        setSearchTerm(e.target.value)
                    }}
                ></input>
            </form>
        </div>
    )
}
export default SearchBar