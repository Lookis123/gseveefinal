import React, { useState } from "react"

const SearchField = () => {
  const [search, setSearch] = useState("")
  return (
    <div className="search-field">
      <input
        className="search-input"
        type="text"
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Αναζήτηση περιεχομένου"
      />
    </div>
  )
}

export default SearchField
