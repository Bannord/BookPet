import React from "react";
import axios from "axios";
import './sort.css'

function Sort () {

    

    const [category, setCategory] = React.useState([])

    async function fetchListsPosts() {
         const response = await axios.get('http://localhost:8080/api/v1/catalog/books/category')
        console.log(response.data)
         setCategory(response.data)
        
         
    }


    

    
    const [open, setOpen] = React.useState(false);

    const [activeIndex, setActivIndex] = React.useState(0);

    const onClickCategory = (index) => {
        setActivIndex(index)
    }

   
//  
    return (
    <div className="list_wrapper" onClick={fetchListsPosts}>
    <h3 onClick={() => setOpen(!open)} className='tag_list'>Витрина книг</h3>
    {open && ( 
        
           <>
            {category?.map((el, i) => 
            <ul key={i} className='lists_wrapper'>
                <li onClick={() => onClickCategory(el.categoryID)} 
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

