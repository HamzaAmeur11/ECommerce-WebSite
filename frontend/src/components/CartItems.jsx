import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext";
import {TbTrash} from 'react-icons/tb'

const CartItems = () => {
	const {all_products, cartItems  , removeFromCart, getTotalCartAmount} = useContext(ShopContext);
	return (
		<section className="max_padd_container pt-28">
			<table className="w-full mx-auto">
				<thead>
					<tr className="py-12 bg-slate-900/10 regular-18 sm:regular-22 text-start">
						<th className="p-1 py-2">Products</th>
						<th className="p-1 py-2">Title</th>
						<th className="p-1 py-2">Price</th>
						<th className="p-1 py-2">Quantity</th>
						<th className="p-1 py-2">Total</th>
						<th className="p-1 py-2">Remove</th>
					</tr>
				</thead>
				<tbody>
					{all_products.map((e) => {
						if(cartItems[e.id] > 0){
							return(
								<tr key={e.id} className="p-6 text-center border-b text-gray-50 border-slate-900/20 medium-14">
									<td className="flexCenter">
										<img src={e.image} alt="prdctImg" height={43} width={43} className="my-1 rounded-lg ring-1 ring-slate-900/"/>
									</td>
									<td><div className=" line-clamp-3">{e.name}</div></td>
									<td>${e.new_price}</td>
									<td className="w-16 h-16 bg-white">{cartItems[e.id]}</td>
									<td>${e.new_price * cartItems[e.id]}</td>
									<td>
										<div className="bold-22 pl-14">
											<TbTrash onClick={()=> removeFromCart(e.id)} />
										</div>
									</td>
								</tr>)}
						return null;
					})}
				</tbody>
			</table>
			{/**cart details */}
			<div className="flex flex-col w-full gap-20 p-8 my-16 bg-white rounded-md md:flex-row max-w-[666px]">
				<div className="flex flex-col gap-10">
					<h4 className="bold-20">Summary</h4>
					<div>
						<div className="py-4 flexBetween">
							<h4 className="medium-16">Subtotal:</h4>
							<h4 className="font-semibold text-gray-30">${getTotalCartAmount()}</h4>
						</div>
						<hr />
						<div className="py-4 flexBetween">
							<h4 className="medium-16">Shipping Fea:</h4>
							<h4 className="font-semibold text-gray-30">Free</h4>
						</div>
						<hr />
						<div className="py-4 flexBetween">
							<h4 className="bold-18">Total:</h4>
							<h4 className="bold-18">${getTotalCartAmount()}</h4>
						</div>
					</div>
					<button className="btn_dark_rounded w-44">Checkout</button>
					<div className="flex flex-col gap-10">
						<h4 className="capitalize bold-20">Your coupon code here:</h4>
						<div className="h-12 pl-5 rounded-full flexBetween bg-primary ring-1 ring-slate-900/10">
							<input type="text" placeholder="Coupon code" className="bg-transparent border-none outline-none"/>
							<button className="btn_dark_rounded">Submit</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CartItems
