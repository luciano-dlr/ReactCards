import { createContext, useState } from "react";
import React from "react";


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartlist] = useState([]);

    const addToCart = (item, qty) => {
        let found = cartList.find(productos => productos.idItem === item.id);
        if (found === undefined) {
            setCartlist([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.img,
                    nameItem: item.name,
                    priceItem: item.price,
                    qtyItem: qty
                }
            ]);
        } else {

            found.qtyItem += qty;
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
        return cartList[index].priceItem * cartList[index].qtyItem;
    }

    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }

    const calcTaxes = () => {
        return calcSubTotal() * 0.18;
    }

    const calcTotal = () => {
        return calcSubTotal();
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }


    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeList,
            deleteItem,
            calcTotalPerItem,
            calcSubTotal,
            calcTaxes,
            calcTotal,
            calcItemsQty
        }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;