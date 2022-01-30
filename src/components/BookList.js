import React from "react"

const BooksList = (props) => {

    return (
        <article className="book_item">
            <h3>{props.book.title}</h3>
            <p>Penulis: {props.book.author}</p>
            <p>Tahun: {props.book.year}</p>
            <div className="action">
                <button className="green" id={props.book.id} onClick={props.onMove}>
                    {(!props.book.isComplete) ? "Selesai" : "Belum selesai"} dibaca
                </button>
                <button className="red" id={props.book.id} onClick={props.onDelete}>
                    Hapus buku
                </button>
            </div>
        </article>    
    )
}

export default BooksList