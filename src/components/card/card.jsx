import React from "react";
import './card.css'

function Card({name,  author, authorName}) {


    return (
        <div className="card_item">
        <div className="card_img">
        <img className='img_content_block' src="./img/book.png" alt="book" />
        </div>
        <div className="card_rank">
            <div className="rating_item">★</div>
            <div className="rating_item">★</div>
            <div className="rating_item">★</div>
            <div className="rating_item">★</div>
            <div className="rating_item">★</div>
        </div>
        <div className="text_card">
            {name} 
        </div>
        <div className="author_card">
        
            {author.map((author ) =><li className="author_card" key={author.authorID}> {`${author.firstName} ${author.lastName}`}
            </li>)}
            
        
        </div>
        <button type='submit' className="button_card">Забронировать</button>
    </div>
    )
}
export default Card;

