import { BookReviews } from '../book-reviews/book-reviews'
import './book.css'

export const BookPage = () => (
    <>
    <div className="book_main_wrapper">   
        <span className='book_annotation_text'> Бизнес книги
                    /
                    Грокаем алгоритмы. Илюстриро
                    ванное пособие для прог
                    раммистов и любопытствующих</span>
        
            
                <div className="book_wrapper">
                    <div className="book_img">
                        <img className='img_book' src="./img/booker.jpg" alt="book" />
                    </div>
                    
                    <div className="book_info">
                        <h1 className="title">Грокаем алгоритмы. 
                        Илюстрированное пособие для программистов и любопытствующих</h1>
                        <p className="book_author">Адитья Бхаргава, 2019</p>
                        <button className='button_card_book' type="submit">Забронировать</button>
                        </div>
                        <div className="about_wrapper">
                        <h3 className='title_book_text'>О книге</h3>
                        <p className='book_text'>Алгоритмы - это всего лишь пошаговые алгоритмы
                        решения задач, и большинство таких задач уже были кем-то решены, протестированы 
                        .Можно, конечно, погрузиться в глубокую философию гениального Кнута,
                        изучить многостраничные фолиаты с докозательствами и обоснованиями. но
                        хотите ли вы тратить на это своё время?</p>
                        <p className='book_text' >Откройте великолепно иллюстрированную книгу и вы сразу поймёте, что алгоритмы
                            - это просто. А грокать алгоритмы - это высокое и увлекательное занятие.
                        </p>
                        
                    
                </div>
                
                </div>
        
    </div>
    <BookReviews/>
    </>
)