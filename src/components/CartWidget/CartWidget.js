import './CartWidget.css'

export const CartWidget = ({ cantidad }) => {
    return (
        <div className='CartWidget-image'>
            <img className='img-fluid' src="./imagenes/cart.svg" alt='cart.imagen' />
            <h2>{cantidad}</h2>
        </div>
    )
}
