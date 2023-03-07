import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/card/card';
import Sort from '../../components/Sort/Sort';
import axios from 'axios';
import './main_page.css';
import Myselect from '../../components/UI/select/myselect';


// async function fetchPosts() {
//     const response = await axios.get('http://localhost:8080/api/v1/catalog')
   
//     console.log(response.data.books.content)
   
// }
// fetchPosts()



function MainPage() {

    const [books, setBooks] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:8080/api/v1/catalog').then((resp) => resp.json()).then(json => {
            setBooks(json.books.content)
        });
        }, [])

        const [searchValue, setSearchValue] = React.useState("");

        const onChangeInput = (event) => {
            setSearchValue(event.target.value);
          };

   

    return (



    <div className='main_page'>
        <div className="list_wrapper">
       <Sort/>
        <div className='terms_of_use'>Правила пользования </div>
        <div className='offer_agreement'>Договор оферты </div>   
       </div>
        <div className="content_block_wrapper">
            <div className="search_block_wrapper">
                {/* <div className="search_content_buttons">   пиксель перфект(большая вложенность) */} 
                <div className="search_block">
                    <img className='img_search_block' src="./img/search.svg" alt="Search" />
                    
                    <input onChange={onChangeInput} placeholder="Поиск книги или автора…" />
                </div>
                <div className="search_by_rate">
                       <Myselect 
                        defaultValue='Сортировка'
                        options={[
                            {value: 'title', name: 'По названию'},
                            {value: 'quantity', name: 'По описанию'}
                        ]}
                       />
                   
                    
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
                    {/* <Link to = "/cardBook" > */}
                    {
                        books.map(obj => <Card key={obj.bookID} name={obj.name} 
                          author={obj.author}  />)
                    }
                    {/* </Link> */}
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
    )
    };
export default MainPage