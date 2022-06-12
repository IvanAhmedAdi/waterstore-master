import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    return (
        <nav className="navv">
          <Link to='/'><h1 className="huno">WaterStore</h1></Link>
            <div className="divnav">

                <Link to='/categoria/celulares'><button className="btn">Celulares</button></Link>
                <Link to='/categoria/tablets'><button className="btn">Tablets</button></Link>
                <Link to='/categoria/smarts'><button className="btn">Smarts</button></Link>

            </div>

            <CartWidget />

        </nav>
    

    );
}

export default NavBar