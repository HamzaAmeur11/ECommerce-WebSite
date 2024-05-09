import { Link, NavLink } from "react-router-dom"
import logo from '../assets/logo.svg'
import NavBar from "./NavBar"
import { useState } from "react"
import { MdClose, MdMenu } from "react-icons/md"
import { FaOpencart } from "react-icons/fa"


const Header = () => {
	const [menuOpened, setMenuOpened] = useState(false);
	const toggleMenu = () => setMenuOpened(!menuOpened);

	return (
		<header className="fixed top-0 left-0 z-10 w-full m-auto bg-white max_padd_container ring-1 ring-slate-900/5">
			<div className="px-4 py-3 flexBetween max-xs:px-2">
				{/* LOGO */}
				<div>
					<Link><img src={logo} alt="" height={66} width={66} /></Link>
				</div>
				{/**NavBar */}
				<NavBar containerStyles={`hidden md:flex gap-x-5 xl:gap-x-10 medium-15`}/>
				{/**NavBar Mob */}
				<NavBar containerStyles={`${menuOpened ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-stale-900/5 transition-all duration-300"
					: "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-stale-900/5 transition-all duration-300 -right-[100%]"}`}/>
				{/**Buttons */}
				<div className="flexBetween sm:gap-x-6 bold-16">
					{!menuOpened ?  (
					<MdMenu className="w-8 h-8 p-1 mr-2 rounded-full cursor-pointer md:hidden hover:text-secondary ring-1 ring-stale-900/30"
							onClick={toggleMenu}
					/>
					) : (
					<MdClose className="w-8 h-8 p-1 mr-2 rounded-full cursor-pointer md:hidden hover:text-secondary ring-1 ring-stale-900/30"
							onClick={toggleMenu}
					/>)}
					<div className="flexBetween sm:gap-x-6">
						<NavLink to={'cart-page'} className="flex"><FaOpencart className="w-8 h-8 p-1 rounded-full ring-1 ring-sky-900/30" /><span>0</span> </NavLink>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
