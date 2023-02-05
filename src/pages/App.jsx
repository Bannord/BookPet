import React from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { MainPage } from "./main/main-page";
import { Route, Routes } from "react-router-dom";
import {BookPage} from './book/book-page'

export const App = () => (
    <div className='app'>
        <Header/>
        <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/cardBook" element={<BookPage />}></Route>  
    
        </Routes>
        <Footer/>
    </div>
)