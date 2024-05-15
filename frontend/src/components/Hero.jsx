import { MdOutlineLocalOffer } from "react-icons/md"
import { NavLink } from "react-router-dom"
import { FaStar } from "react-icons/fa"

const Hero = () => {
  return (
	<section className="relative w-full h-screen bg-center bg-no-repeat bg-hero">
		<div className="relative max_padd_container top-32 xs:top-52">
			<h1 className="capitalize h1 max-w-[37rem]">DIGITAL SHOPPING WEWEWEWE</h1>
			<p className="mt-6 text-gray-50 regular-16 max-w-[33rem]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque neque tenetur ducimus, reiciendis ipsa porro cum ab saepe rem delectus aut assumenda maxime illum culpa commodi aliquam fugit repellendus repellat molestias ea? Quibusdam.</p>
			<div className="flexStart !items-center gap-x-4 mt-10">
				<div className="!regular-24 flexCenter gap-x-3">
					<FaStar />
					<FaStar />
					<FaStar />
					<FaStar />
				</div>
				<div className="bold-16 sm:bold-20">
					176K <span className="regular-16 sm:regular-20">Excellent reviews</span>
				</div>
			</div>
			<div className="flex gap-2 max-xs:flex-col">
				<NavLink to={''} className={'btn_dark_rounded flexCenter'}>Shop Now</NavLink>
				<NavLink to={''} className={'btn_dark_rounded flexCenter'}><MdOutlineLocalOffer className="text-2xl"/>Offers</NavLink>
			</div>
		</div>
	</section>
  )
}

export default Hero
