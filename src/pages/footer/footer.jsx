import './footer.css';


export const Footer = () => (
    <footer className="footer_wrapper">
        <div className="footer_content">
            <div className="footer_text_wrapper">
            <p className='footer_text'>© 2020-2023 Cleverland. Все права защищены.</p>
            </div>
            <div className="links_footer">
                <img className='social_link' src="./img/facebook.svg" alt="facebook" />
                <img className='social_link' src="./img/inst.svg" alt="instagram" />
                <img className='social_link' src="./img/vk.svg" alt="vk" />
                <img className='social_link' src="./img/linked.svg" alt="linkedin" />
            </div>
        </div>
    </footer>
)

