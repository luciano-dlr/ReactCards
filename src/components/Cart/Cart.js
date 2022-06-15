import { useContext } from "react"
import { CartContext } from "../CartContext";
import React from "react"
import { Link } from "react-router-dom";

const Cart = () => {
    const test = useContext(CartContext);
    return (
        <div className="">
            <h1>CART</h1>
            <div className="">
                <Link to='/'><button className="btn btn-dark">CONTINUAR COMPRANDO</button></Link>
                {
                    (test.cartList.length > 0)
                        ? <button className="btn btn-dark mx-5" type="filled" onClick={test.removeList}>BORRAR PRODUCTOS</button>
                        : <p>Tu carrito esta vacio</p>
                }
            </div>
            <div>


                {
                    test.cartList.length > 0 &&
                    test.cartList.map(item =>
                        <div key={item.idItem}>
                            <div>
                                <img src={item.imgItem} width='300px' height='400px' />
                                <div>
                                    <span>
                                        <b>Producto:</b> {item.nameItem}
                                    </span>
                                    <button className='btn btn-dark mx-3' type="filled" onClick={() => test.deleteItem(item.idItem)}>BORRAR</button>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h3>{item.qtyItem} Producto(S)</h3>

                                    <h3>$ {item.priceItem}</h3>
                                </div>
                                <h3>Total: $ {test.calcTotalPerItem(item.idItem)} </h3>
                            </div>
                        </div>
                    )
                }

                {/*     {
                    test.cartList.length > 0 &&
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcSubTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Taxes</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Taxes Discount</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={-test.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <Button>CHECKOUT NOW</Button>
                        </Summary>
                }
            */}
            </div>
        </div>
    );
}

export default Cart;