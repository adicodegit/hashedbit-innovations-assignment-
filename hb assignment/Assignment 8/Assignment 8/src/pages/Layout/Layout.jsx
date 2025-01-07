import { Outlet } from 'react-router-dom';
import './style.css';

function Layout() {
    return (
        <>
        <header className="header">
            <div className="header-container">
                <div className="header-left">
                    <div className="header-logo-container">
                        <a href="/"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fsvg-2-logo-png-transparent.png&f=1&nofb=1&ipt=85d17a4a9b29b2e0728097856f449c3bb9eb0f719cc2f04e3efa95eeac30aed2&ipo=images" alt="logo" /></a>
                    </div>
                    <nav className="header-nav">
                        <ul className="header-navlist-container">
                            <li><a href="/">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div> 
                <div className="header-right">
                    <div className="header-social">
                        <div className="header__social__container">
                            <a href="#"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Finstagram-transparent-image%2Finstagram-transparent-image-5.png&f=1&nofb=1&ipt=51b2f1d5bd84377639df2787430aecd60dd3f91c4b3a1beb4868d60a085be288&ipo=images" alt="instagram-link" /></a>
                        </div>
                        <div className="header__social__container">
                            <a href="#"><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.iconscout.com%2Ficon%2Ffree%2Fpng-256%2Ffacebook-203-721979.png&f=1&nofb=1&ipt=51b2f1d5bd84377639df2787430aecd60dd3f91c4b3a1beb4868d60a085be288&ipo=images" alt="twitter-link" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <Outlet />  
        </main>
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <p>&copy; 2023 Your Company. All rights reserved.</p>
                </div>
                <div className="footer-right">
                    <ul className="footer-nav">
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </footer>
        </>
    )
}

export default Layout