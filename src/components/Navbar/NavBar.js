import CartWidget from '../CartWidget/CartWidget'

import './NavBar.css';

function NavBar() {
    return (
        <nav className="navv">
            <h1 className="huno">WaterStore</h1>
            <div className="divnav">

                <button className="btn">Celulares</button>
                <button className="btn">Tablets</button>
                <button className="btn">Smarts</button>

            </div>

            <CartWidget />

        </nav>
    

    );
}

export default NavBar