const Search = () => {
    return ( 
        <form className="relative w-3/4 mt-3 ml-14">
        <input
          name="search"
          type="text"
          placeholder="Search article ....."
          className="bg-slate-100 rounded-xl py-5 px-12 w-full text-gray-900 shadow-md focus:outline-none focus:bg-slate-200 focus:shadow-outline mr-2"
        //   onChange={(e) => handleSearchChange(e.target.value)}
        />
        <span className="absolute inset-y-0 left-0 flex text-2xl bg-slate-100 shadow-sm pr-1 rounded-md items-center pl-4">
          <ion-icon name="search"></ion-icon> 
         
        </span>
      </form>
     );
}
 
export default Search;