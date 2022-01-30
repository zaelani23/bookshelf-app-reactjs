import React from "react"

const FormInputBook = (props) => {

    const [inputBook, setInputBook] = React.useState({
        id : 0,
        title : "",
        author : "",
        year : "",
        isComplete : false
    })

    const handleInputChange = (event) => {
        if (event.target.type === "checkbox") {
            setInputBook({...inputBook, [event.target.name] : event.target.checked, id : +new Date()})
        }else{
            setInputBook({...inputBook, [event.target.name] : event.target.value, id : +new Date()})
        }        
    }

    const handleSubmitButton = (event) => {
        event.preventDefault()
        props.onSubmit(inputBook)
        setInputBook({
            id : 0,
            title : "",
            author : "",
            year : "",
            isComplete : false
        })
    }

    return (
        <form id="inputBook">
            <div className="input">
                <label htmlFor="inputBookTitle">Judul</label>
                <input id="inputBookTitle" name="title" onChange={handleInputChange} value={inputBook.title} type="text" required/>
            </div>
            <div className="input">
                <label htmlFor="inputBookAuthor">Penulis</label>
                <input id="inputBookAuthor" name="author" onChange={handleInputChange} value={inputBook.author} type="text" required/>
            </div>
            <div className="input">
                <label htmlFor="inputBookYear">Tahun</label>
                <input id="inputBookYear" name="year" onChange={handleInputChange} value={inputBook.year} type="number" required/>
            </div>
            <div className="input_inline">
                <label htmlFor="inputBookIsComplete">Selesai dibaca</label>
                <input id="inputBookIsComplete" name="isComplete" onChange={handleInputChange} checked={inputBook.isComplete} type="checkbox"/>
            </div>
            <button id="bookSubmit" onClick={handleSubmitButton} type="submit">Masukkan Buku Ke Rak</button>
        </form>        
    )
}

export default FormInputBook
