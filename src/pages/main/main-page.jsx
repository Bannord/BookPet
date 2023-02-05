import { Link } from 'react-router-dom';
import './main_page.css';

export const MainPage = () => (
    <div className='main_page'>
        <div className="list_wrapper">
            <h3 className='tag_list'>Витрина книг</h3>
            <ul className='lists_wrapper'>
                <li className='list_title all_books'>Все книги </li>
                <li className='list_title'>Бизнес-книги <span className='num_books'>14</span></li>
                <li className='list_title'>Детективы <span className='num_books'>8</span></li>
                <li className='list_title'>Детские книги <span className='num_books'>10</span></li>
                <li className='list_title'>Зарубежная литература <span className='num_books'>2</span></li>
                <li className='list_title'>История <span className='num_books'>5</span></li>
                <li className='list_title'>Классическая литература <span className='num_books'>12</span></li>
                <li className='list_title'>Книги по психологии <span className='num_books'>11</span></li>
                <li className='list_title'>Компьютерная литература <span className='num_books'>54</span></li>
                <li className='list_title'>Культура и искусство <span className='num_books'>0</span></li>
                <li className='list_title'>Наука и образование <span className='num_books'>2</span></li>
                <li className='list_title'>Публицистическая литература <span className='num_books'>0</span></li>
                <li className='list_title'>Справочники <span className='num_books'>10</span></li>
                <li className='list_title'>Фантастика <span className='num_books'>12</span></li>
                <li className='list_title'>Юмористическая литература <span className='num_books'>8</span></li>
                <li className='terms_of_use'>Правила пользования </li>
                <li className='offer_agreement'>Договор оферты </li>   
            </ul>
        </div>
        <div className="content_block_wrapper">
            <div className="search_block_wrapper">
                {/* <div className="search_content_buttons">   пиксель перфект(большая вложенность) */} 
                <div className="search_block">
                    <img className='img_search_block' src="./img/search.svg" alt="Search" />
                    <input placeholder="Поиск книги или автора…" />
                </div>
                <div className="search_by_rate">
                    <img className='img_rate_block' src="./img/rate.svg" alt="price" />
                    <span className='rate_text'>по рейтингу</span>
                </div>
                {/* </div> */}
                {/* <div className="filters_buttons"> пиксель перфект(большая вложенность) */}
                <div className="tile_search_wrapper">
                    <img className='img_tile' src="./img/tile.svg" alt="tile" />
                </div>
                <div className="list_search_wrapper">
                    <img className='img_list' src="./img/list.svg" alt="list" />
                </div>
                {/* </div>  */}
            </div>
                <div className="content_wrapper">
                    <Link to = "/cardBook" >
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
                            Грокаем алгоритмы. Иллюстрированное 
                        </div>
                        <div className="author_card">
                        Адитья Бхаргава, 2019
                        </div>
                        <button type='submit' className="button_card">Забронировать</button>
                    </div>
                    </Link>
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
                            Грокаем алгоритмы.
                        </div>
                        <div className="author_card">
                        Адитья Бхаргава, 2019
                        </div>
                        <button type='submit' className="button_card_reserve">Занята до 03.05</button>
                    </div>
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
                        Грокаем алгоритмы. Иллюстрированное пособие для програ...
                        </div>
                        <div className="author_card">
                        Адитья Бхаргава, 2019
                        </div>
                        
                        <button type='submit' className="button_card">Забронировать</button>
                    </div>
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
                        Грокаем алгоритмы. Иллюстрированное пособие для програ...
                        </div>
                        <div className="author_card">
                        Адитья Бхаргава, 2019
                        
                        </div>
                        <button type='submit' className="button_card">Забронировать</button>
                    </div>
                    <div className="card_item">
                        <div className="card_img">
                        <img className='img_content_block' src="./img/book.png" alt="book" />
                        </div>
                        <div className="card_rank">
                            <div className="rating_item">★</div>
                            <div className="rating_item">★</div>
                            <div className="rating_item ">★</div>
                            <div className="rating_item_blank">★</div>
                            <div className="rating_item_blank"><span>★</span></div>
                        </div>
                        <div className="text_card">
                            Грокаем алгоритмы. Иллюстрированное пособие для програ...
                        </div>
                        <div className="author_card">
                        Адитья Бхаргава, 2019
                        Патрик Нимейер
                        </div>
                        <button type='submit' className="button_card_blocked">Забронирована</button>
                    </div>
                    <div className="card_item">
                        <div className="card_img">
                        <img className='img_content_block_blank' src="./img/cat.svg" alt="book" />
                        </div>
                        <div className="card_rank">
                            <div className="rating_item">★</div>
                            <div className="rating_item">★</div>
                            <div className="rating_item">★</div>
                            <div className="rating_item_blank">★</div>
                            <div className="rating_item_blank">★</div>
                        </div>
                        <div className="text_card">
                            Грокаем алгоритмы. Иллюстрированное пособие для програ...
                        </div>
                        <div className="author_card">
                        Адитья Бхаргава, 2019
                        </div>
                        <button type='submit' className="button_card">Забронировать</button>
                    </div>
                    <div className="card_item">
                        <div className="card_img">
                        <img className='img_content_block' src="./img/book.png" alt="book" />
                        </div>
                        <div className="card_rank">
                            <div className="rating_item">★</div>
                            <div className="rating_item">★</div>
                            <div className="rating_item_blank">★</div>
                            <div className="rating_item_blank">★</div>
                            <div className="rating_item_blank">★</div>
                        </div>
                        <div className="text_card">
                            Грокаем алгоритмы. Иллюстрированное пособие для програ...
                        </div>
                        <div className="author_card">
                        Адитья Бхаргава, 2019
                        Патрик Нимейер
                        </div>
                        <button type='submit' className="button_card_blocked">Забронирована</button>
                    </div>
                    <div className="card_item">
                        <div className="card_img">
                        <img className='img_content_block' src="./img/book.png" alt="book" />
                        </div>
                        <div className="card_rank">
                            <div className="rating_item">★</div>
                            <div className="rating_item_blank">★</div>
                            <div className="rating_item_blank">★</div>
                            <div className="rating_item_blank">★</div>
                            <div className="rating_item_blank">★</div>
                        </div>
                        <div className="text_card">
                            Грокаем алгоритмы. Иллюстрированное пособие для програ...
                        </div>
                        <div className="author_card">
                        Адитья Бхаргава, 2019
                        Патрик Нимейер
                        </div>
                        <button type='submit' className="button_card_reserve">Занята до 23.04</button>
                    </div>
                    <div className="card_item">
                        <div className="card_img">
                        <img className='img_content_block' src="./img/book.png" alt="book" />
                        </div>
                        <div className="card_rank">
                            <div className="rating_item">★</div>
                            <div className="rating_item_blank">★</div>
                            <div className="rating_item_blank">★</div>
                            <div className="rating_item_blank">★</div>
                            <div className="rating_item_blank">★</div>
                        </div>
                        <div className="text_card">
                            Грокаем алгоритмы. Иллюстрированное пособие для програ...
                        </div>
                        <div className="author_card">
                        Адитья Бхаргава, 2019
                        </div>
                        <button type='submit' className="button_card">Забронировать</button>
                    </div>
                    <div className="card_item">
                        <div className="card_img">
                        <img className='img_content_block_blank' src="./img/cat.svg" alt="book" />
                        </div>
                        <div className="card_rank">
                            ещё нет оценок
                        </div>
                        <div className="text_card">
                            Грокаем алгоритмы. Иллюстрированное пособие для програ...
                        </div>
                        <div className="author_card">
                        Адитья Бхаргава, 2019
                        </div>
                        <button type='submit' className="button_card">Забронировать</button>
                    </div>
                    <div className="card_item">
                        <div className="card_img">
                        <img className='img_content_block' src="./img/book.png" alt="book" />
                        </div>
                        <div className="card_rank">
                            ещё нет оценок
                        </div>
                        <div className="text_card">
                            Грокаем алгоритмы. Иллюстрированное пособие для програ...
                        </div>
                        <div className="author_card">
                        Адитья Бхаргава, 2019
                        </div>
                        <button type='submit' className="button_card">Забронировать</button>
                    </div>
                </div>
            
        </div>
    </div>
);
