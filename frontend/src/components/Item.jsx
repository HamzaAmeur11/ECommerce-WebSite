import { Link } from "react-router-dom"
import {FaSearch } from "react-icons/fa"

const Item = ({id, name, image, old_price, new_price}) => {

	return (
		<div className="overflow-hidden shadow-lg rounded-xl">
			<div className="relative overflow-hidden transition-all duration-100 flexCenter group">
				<Link to={`product/${id}`} className="absolute flexCenter  w-12 h-12 bg-white rounded-full top-1/2 bottom-1/2 !py-2 z-20 transition-all duration-700 scale-0 group-hover:scale-100">
					<FaSearch className="transition-all duration-200 scale-125 hover:rotate-90"/>
				</Link>
				<img src={image} alt="productImage" className="block object-cover w-full transition-all duration-1000 group-hover:scale-110"/>

			</div>
			<div className="p-4 overflow-hidden">
				<h4 className=" my-[6px] medium-16 line-clamp-2 text-gray-30">{name}</h4>
				<div className="flex gap-5">
					<div className=" bold-16">{old_price}</div>
					<div className="line-through text-secondary bold-16">{new_price}</div>
				</div>
			</div>
		</div>
	)
}

export default Item
