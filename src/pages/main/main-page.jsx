import React, { useEffect } from 'react';

import Card from '../../components/card/card';
import Sort from '../../components/Sort/Sort';

import './main_page.css';
import Myselect from '../../components/UI/select/myselect';
import Input from '../../components/UI/input/input';
import { auth } from '../../actions/user';
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from '../../actions/books';




function MainPage() {

    const dispatch = useDispatch()
   
    const [books, setBooks] = React.useState([])

    React.useEffect(() => {
        dispatch(getBooks())
    }, [dispatch])

   



    
    const bookks = useSelector(state => state.files.books);
    
        const [searchValue, setSearchValue] = React.useState("");

        const onChangeInput = (event) => {
            setSearchValue(event.target.value);
          };

          const [selectedSort, setSelectedSort] = React.useState('')

          const sortedBooks = React.useMemo(() => {
            console.log('ОТРАБОТАЛА ФУНКЦИЯ СОРДЕТ ПОСТ')
            if(selectedSort) {
                return [...books].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
            }
                return books;
          }, [selectedSort, books])

          const sortedAndSearchBooks = React.useMemo(() => {
            return sortedBooks.filter(books => books.name.toLowerCase().includes(searchValue))

          }, [searchValue, sortedBooks])

          const sortBooks = (sort) => {
            setSelectedSort(sort);
            

          }

   

    return (



    <div className='main_page'>
        <div className="list_wrapper">
       <Sort/>
        <div className='terms_of_use'>Правила пользования </div>
        <div className='offer_agreement'>Договор оферты </div>   
       </div>
        <div className="content_block_wrapper">
            <div className="search_block_wrapper">
                {/* <div className="search_content_buttons">   пиксель перфект(большая вложенность)  */}
                <Input 
                    onChangeInput={onChangeInput}
                />
                <div className="search_by_rate">
                       <Myselect 
                        value={selectedSort}
                        onChange={sortBooks}
                        defaultValue='Сортировка'
                        options={[
                            {value: 'name', name: 'По названию книги'},
                            {value: 'author', name: 'По автору'}
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
                        bookks.map(obj => <Card  key={obj.bookID} name={obj.name} 
                          author={obj.author}
                          img={obj.image}  />)
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
                    </div>
                </div>
            
        </div>
    </div>
    
    )
    };
export default MainPage
