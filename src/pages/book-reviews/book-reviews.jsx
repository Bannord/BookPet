import './book-reviews.css'


export const BookReviews = () => (
    <>
    <div className="revies_wrapper">
        <div className="rate_books">
            <h2 className="book_rating">Рейтинг</h2>
            <div className="card_rank">
                    <div className="rating_item">★</div>
                    <div className="rating_item">★</div>
                    <div className="rating_item">★</div>
                    <div className="rating_item">★</div>
                    <div className="rating_item_blank">★</div>
                    <span className="cost_rating">4.3</span>
            </div>
        </div>
        <h3 className="title_info">Подробная информация</h3>
        <div className="info_about_book">
           <div className="info_block_first">
                <div className="first_parametr">
                    <span className='title_parametr'>Издательство</span>
                    <span className='text_parametr'>Питер</span>
                </div>
                <div className="first_parametr">
                    <span className='title_parametr'>Год издания</span>
                    <span className='text_parametr'>2019</span>
                </div>
                <div className="first_parametr">
                    <span className='title_parametr'>Страниц</span>
                    <span className='text_parametr'>288</span>
                </div>
                <div className="first_parametr">
                    <span className='title_parametr'>Переплёт</span>
                    <span className='text_parametr'>Мягкая обложка</span>
                </div>
                <div className="first_parametr">
                    <span className='title_parametr'>Формат</span>
                    <span className='text_parametr'>70х100</span>
                    </div>
                
            </div>
                <div className="info_block_second">
                    <div className="first_parametr">
                        <span className='title_parametr'>Жанр</span>
                        <span className='text_parametr text_second'>Компьютерная литература</span>
                    </div>
                    <div className="first_parametr">
                        <span className='title_parametr'>Вес</span>
                        <span className='text_parametr text_second'>370 г</span>
                    </div>
                    <div className="first_parametr">
                        <span className='title_parametr'>ISBN</span>
                        <span className='text_parametr text_second'>978-5-4461-0923-4</span>
                    </div>
                    <div className="first_parametr">
                        <span className='title_parametr'>Изготовитель</span>
                        <span className='text_parametr text_second'>ООО «Питер Мейл». РФ, 198 206, г. Санкт-петербург, Петегорское ш, д.73, лит. А29</span>
                    </div>
                </div>
        </div>
        <div className="reviews_title">
            <h3 className="reviews">Отзывы</h3>
            <span className='cost_reviews'>2</span>
        </div>
        <hr className='hr' />
        <div className="comment_wrapper">
            <div className="img_profile">
                <img src="./img/user_photo.svg" alt="img_user" />
            </div>
            <h4 className="profile_name">Иван Иванов</h4>
            <div className="date_post">5 января 2019</div>
        </div>
        <div className="card_rank rating_book">
                    <div className="rating_item">★</div>
                    <div className="rating_item">★</div>
                    <div className="rating_item">★</div>
                    <div className="rating_item">★</div>
                    <div className="rating_item_blank">★</div>
                    
            </div>
            <div className="comment_wrapper">
            <div className="img_profile">
                <img src="./img/user_photo.svg" alt="img_user" />
            </div>
            <h4 className="profile_name">Николай Качков</h4>
            <div className="date_post">20 января 2018</div>
        </div>
        <div className="card_rank ">
                    <div className="rating_item">★</div>
                    <div className="rating_item">★</div>
                    <div className="rating_item">★</div>
                    <div className="rating_item">★</div>
                    <div className="rating_item_blank">★</div>
                    
            </div>
        <p className='text_user'>Учитывая ключевые сценарии поведения, курс на социально-ориентированный национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций — глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений, что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище, хотя само их существование приносит несомненную пользу обществу. </p>
        <div className="comment_wrapper">
            <div className="img_profile">
                <img src="./img/user_photo.svg" alt="img_user" />
            </div>
            <h4 className="profile_name">Екатерина Беляева</h4>
            <div className="date_post">18 января 2018</div>
        </div>
        <div className="card_rank rating_book">
                    <div className="rating_item">★</div>
                    <div className="rating_item">★</div>
                    <div className="rating_item">★</div>
                    <div className="rating_item">★</div>
                    <div className="rating_item_blank">★</div>
                    
            </div>
            <button className='button_card_book feed_back' type="submit">оценить книгу</button>
    </div>
    
    </>
)