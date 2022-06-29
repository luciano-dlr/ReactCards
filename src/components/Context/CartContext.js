import { createContext, useState } from "react";
import React from "react";


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartlist] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);
        if (found === undefined) {
            setCartlist([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.img,
                    nameItem: item.name,
                    priceItem: item.price,
                    quantityItem: qty
                }
            ]);
        } else {

            found.quantityItem += qty;
            setCartlist([
                ...cartList
            ]);
        }
    }

    const removeList = () => {
        setCartlist([]);
    }

    const deleteItem = (id) => {
        let result = cartList.filter(item => item.idItem !== id);
        setCartlist(result);
    }

    const calcTotalPerItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].priceItem * cartList[index].quantityItem;
    }


    const sumaTotalProduct = () => {
        let totalForitem = cartList.map(item => calcTotalPerItem(item.idItem))
        return totalForitem.reduce((previousValue, currentValue) => previousValue + currentValue)
    }

    const calcItemsQty = () => {
        let cantidadItems = cartList.map(item => item.quantityItem);
        return cantidadItems.reduce(((previousValue, currentValue) => previousValue + currentValue), 0)
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeList,
            calcItemsQty,
            deleteItem,
            calcTotalPerItem,
            sumaTotalProduct,
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;