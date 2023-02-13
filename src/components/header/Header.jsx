import './header.css'

function Header(){
    return <>
     <header>
        <div className="top">
            <a href="#">
                <div className="logo"></div>
            </a>
            <a href="#">
                <div className="deliver-to">
                    <span>Deliver to</span>
                    <span><i className="fas fa-map-marker-alt"></i>Israel</span>
                </div>
            </a>
            <div className="search">
                <input type="text"/>
                <div className="search-by">
                    All
                    <span className="arrow"></span>
                </div>
                <i className="icon fas fa-search"></i>
            </div>
            <a href="#">
                <div className="languages">
                    <span className="flag"></span>
                    <span>En</span>
                    <span className="arrow"></span>
                </div>
            </a>
            <a href="#">
                <div className="sign-in">
                    Hello,sign in
                    <span>Account & Lists <span className="arrow"></span></span>
                </div>
            </a>
            <a href="#">
                <div className="return-orders">
                    Returns
                    <span>& Orders</span>
                </div>
            </a>
            <a href="#">
                <div className="cart">
                    <span className="icon"></span>
                    <span>Cart</span>
                    <div className="orders">0</div>
                </div>
            </a>
        </div>
        <div className="top top-phone">
            <div className="top">
               <div className="left">
                <i className="fas fa-bars"></i>
                <a href="#">
                    <div className="logo"></div>
                </a>
               </div>
               <div className="right">
                Sign in 
                <i className="far fa-user"></i>
                <a href="#">
                    <div className="cart">
                        <span className="icon"></span>
                        <span>Cart</span>
                        <div className="orders">0</div>
                    </div>
                </a>
               </div>
            </div>
            <div className="search">
                <input type="text" />
                <i className="icon fas fa-search"></i>
            </div>
        </div>
        <nav>
            <div className="left">
                <a href="#">
                    <i className="fas fa-bars"></i>
                    All
                </a>
                <a href="#">Today's Deals</a>
                <a href="#">Customer Service</a>
                <a href="#">Gift Cards</a>
                <a href="#">Registry</a>
                <a href="#">Sell</a>
            </div>
            <div className="right">
                <a href="#">Shop great deals now</a>
            </div>
        </nav>
    </header>
    </>
}
export default Header