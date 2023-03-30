import React from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";

import {  Route, Routes } from "react-router-dom";
import {BookPage} from './book/book-page'
import MainPage from "./main/main-page";
import { Registration } from "../components/registration/registration";
import { Auth } from "../components/authorization/auth";
import { useSelector } from "react-redux";



export const App = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    return (
    
    
    <div className='app'>
        <Header/>
        <Routes>
            {
                !isAuth && 
                <>
                    <Route path="/registration" element={<Registration />}></Route>
                    <Route path="/authorization" element={<Auth />}></Route> 
                </>
            }
        
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/cardBook" element={<BookPage />}></Route>  
        
        </Routes>
        <Footer/>
    </div>
  
    )
}