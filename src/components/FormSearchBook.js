import React from "react"

const FormSearchBook = (props) => {

    const [searchQuery, setSearchQuery] = React.useState("")

    const handleOnChangeSearch = (event) => {
        setSearchQuery(event.target.value)
    }

    const handleSubmitSearch = (event) => {
        event.preventDefault()
        props.onSubmitSearch(searchQuery)
        setSearchQuery("")
    }

    return (
        <form id="searchBook">
            <label htmlFor="searchBookTitle">Judul</label>
            <input id="searchBookTitle" value={searchQuery} onChange={handleOnChangeSearch} type="text"/>
            <button id="searchSubmit" onClick={handleSubmitSearch} type="submit">Cari</button>
        </form>
    )
}

export default FormSearchBook
