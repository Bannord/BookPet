import { NavLink } from 'react-router-dom';
import './header.css';

export const Header = () => (
    <section className="header_row">
        <div className="tag_title_row">
            <div className="icon_title_img">
                <img className='logo_icon' src="/img/main_logo.png" alt="Logo" />
            </div>
            <div className="title_name">
                CleverLand
            </div>
        </div>
            <div className="hamburger-lines">
              <span className="line line1">.</span>
              <span className="line line2">.</span>
              <span className="line line3">.</span>
            </div>  
        <div className="chapter">Библиотека</div>
        <div className="user_row">
            <div className='user_ping'>Привет, Иван!</div>
            <div className="user_img">
                <img className='user_avatar' src="/img/avatar.png" alt="avatar" />
            </div>
        </div>
        <div> <NavLink to='registration'>Регистрация</NavLink></div>
        <div>войти</div>
    </section>
);