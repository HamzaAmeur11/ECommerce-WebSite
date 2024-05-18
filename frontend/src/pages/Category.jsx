import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import all_products from "../assets/all_products"
import Item from "../components/Item"

const Category = ({category, banner}) => {
	return (
		<section className="py-12 max_padd_container xl:py-28">
			<div>
				<div>
					<img src={banner} alt=""  className="block mx-auto my-7"/>
				</div>
				<div className="mx-2 my-8 flexBetween">
					<h5><span className="font-bold">Showing 1-12</span> out of 36 products</h5>
					<div className="px-8 py-3 rounded-5xl ring-1 ring-slate-900/15 flexBetween max-sm:p-4 gap-x-4">Sort by<MdOutlineKeyboardArrowDown/></div>
				</div>
				{/** Container */}
				<div className="grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
					{all_products.map((item) =>{
						if (category === item.category){
							return <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
						}
					})}
				</div>
				<div className="mt-16 text-center ">
					<button className="btn_dark_rounded"> Load more</button>
				</div>
			</div>
		</section>
	)
}

export default Category

