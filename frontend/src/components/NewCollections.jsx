import Item from "./Item"
import LATEST from "../assets/latest"

const NewCollections = () => {
	return (
		<section className="bg-primary">
			<div className="py-12 max_padd_container xl:py-28 xl:w-[88%]">
				<h3 className="text-center h3">Latest Products</h3>
				<hr className="h-[3px] md:w-1/2 mx-auto bg-gradient-to-1 from-transparent via-black to-transparent mb-16" />
				{/** Containers */}
				<div className="grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
					{LATEST.map((item) => (
						<Item key={item.id} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price} />
					))}
				</div>
			</div>
		</section>
	)
}

export default NewCollections
