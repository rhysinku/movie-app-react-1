
const Searchbar = ({setSearchValue}) => {
    return (
        <>
          <form className="inputBox" onSubmit={(e)=>e.preventDefault()}>
            <input
            className="inputbox"
            placeholder="Search..."
            onChange={(e) =>(
                 setSearchValue(e.target.value))}
            />
            </form>  
        </>
    );
}

export default Searchbar;
