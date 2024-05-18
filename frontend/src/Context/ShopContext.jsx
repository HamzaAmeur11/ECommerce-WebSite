import { createContext, useState } from "react";
import all_products from "../assets/all_products"

export const ShopContext = createContext(null)

const getDefaultCard = () => {
	let cart = {};
	for (let i = 0; i <= all_products.length; i++){
		cart[i] = 0;
	}
	return cart;
}

const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getDefaultCard());

	const addToCart = (itemId) => {
		setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
	}

	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
	}

	const getTotalCartAmount = () =>{
		let total = 0;
		for (const item in cartItems){
			if (cartItems[item] > 0){
				let itemInfo = all_products.find((product) => product.id === Number(item))
				total += itemInfo.new_price * cartItems[item];
			}
		}
		return total;
	}

	const getTotalCartItems = () => {
		let total = 0;
		for (const item in cartItems){
			if (cartItems[item] > 0)
				total += cartItems[item];
		}
		return total;
	}

	const contextValue = {all_products, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems};

	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	)
}

export default ShopContextProvider;
