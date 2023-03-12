import React from "react";
import './card.css'

function Card({name,  author, img, authorName}) {


    return (
        <div className="card_item">
        <div className="card_img">
        
        {img?.path ?  <img className='img_content_block' src={img?.path} alt={img.filename} /> : <img className='img_content_block_blank' src="./img/cat.svg" alt="book" />}
  
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

