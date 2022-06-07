import CartWidget from '../CartWidget/CartWidget'

import './NavBar.css';

function NavBar() {
    return (
        <nav className="navv">
            <h1 className="huno">WaterStore</h1>
            <div className="divnav">

                <button className="btn">Contacto</button>
                <button className="btn">Oferta</button>
                <button className="btn">Nosotros</button>

            </div>

            <CartWidget />

        </nav>
    

    );
}

export default NavBar