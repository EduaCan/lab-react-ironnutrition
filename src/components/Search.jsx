import { Divider, Input } from 'antd';
import { useState } from "react"

function Search(props) {
    const [searchInput, setSearchInput] = useState("")

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value)
        props.filterSearch(event.target.value)
    }

  return (
    <div>
    <Divider>Search</Divider>

    <label>Search</label>
    <Input value={searchInput} type="text" onChange={handleSearchInput} />
    </div>
  )
}

export default Search