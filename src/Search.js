import { useGlobalContext } from './context'
import './search.css'
const Search = () => {
  const {query,setQuery,isError}=useGlobalContext();
  return (
    <section>
      <h2 className='searchHeader'>Search your favourite Movie</h2>

      <form onSubmit={(e)=>e.preventDefault()} className='input-box button'>
        <input type='text' 
        placeholder="Search here..." 
        value={query} onChange={(e)=>
          setQuery(e.target.value)}/>
          
          
      </form>
      <div className='card-error'>
        <p>{isError.show&&isError.msg}</p>
      </div>

    </section>
  )
}

export default Search