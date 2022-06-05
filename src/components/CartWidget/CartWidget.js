import './CartWidget.css'

const CartWidget = () => {
    return(
        <button to='/cart' className="CartWidget">
           <img src="/images/cart.png" alt='cart-widget' className='CartImg'/>
            5
        </button>
    );
}

export default CartWidget