import React from 'react'

const Search = ({inputType="Search", inputPlaceholder="Search"}) => {
  return (
   <>
   <form className="d-flex" role="search">
        <input className="form-control searchbar shadow-none text-white" type={inputType} placeholder={inputPlaceholder}/>
    </form>
   </>
  )
}

export default Search