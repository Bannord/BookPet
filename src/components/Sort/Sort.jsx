import React from "react";

import './sort.css'
import { useDispatch, useSelector } from "react-redux";
import { getCategoryes } from "../../actions/books";
import { getBooksByCategory } from "../../actions/books";



function Sort () {

   const  dispatch = useDispatch()

    React.useEffect (() => {
        dispatch(getCategoryes())
    }, [dispatch])

    const handleClickCategory = (categoryId) => {
        dispatch(getBooksByCategory(categoryId))
    }

    

    const categoryes = useSelector(state => state.files.categoryes);


    const handleClick = () => {
        dispatch(getCategoryes());
      }
    

    // const [category, setCategory] = React.useState([])



    

    
    const [open, setOpen] = React.useState(false);

    const [activeIndex, setActivIndex] = React.useState(0);

    const onClickCategory = (index) => {
        setActivIndex(index)
    }

   
//  
    return (
    <div className="list_wrapper" onClick={handleClick}>
    <h3 onClick={() => setOpen(!open)} className='tag_list'>Витрина книг</h3>
    {open && ( 
        
           <>
            {categoryes?.map((el, i) => 
            <ul key={i} className='lists_wrapper'>
                <li onClick={() => {
                        handleClickCategory(el.categoryID)
                        onClickCategory(el.categoryID)
                     }} 
                             
                    className={activeIndex ===  el.categoryID? 'list_title active' : 'list_title'}>{el.name} 
                        <span className='num_books'>
                            {el.quantity}
                        </span>
                </li>
            </ul> )}
            
        
    </>
    )
    }
</div>
    )
}

export default Sort;

