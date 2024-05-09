import { NavLink } from "react-router-dom"
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from 'react-icons/md'


const NavBar = ({ containerStyles }) => {
	return (
		<nav className={`${containerStyles}`}>
			<NavLink to={'/'}><div className="fixedCenter gap-x-1"><MdHomeFilled />Home</div></NavLink>
			<NavLink to={'/mens'}><div className="fixedCenter gap-x-1"><MdCategory />Mens</div></NavLink>
			<NavLink to={'/womans'}><div className="fixedCenter gap-x-1"><MdShop2 />Womans</div></NavLink>
			<NavLink to={'/kids'}><div className="fixedCenter gap-x-1"><MdContacts />Kids</div></NavLink>
		</nav>
	)
}

export default NavBar
