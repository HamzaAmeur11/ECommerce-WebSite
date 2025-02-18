import { NavLink } from "react-router-dom"
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from 'react-icons/md'


const NavBar = ({ containerStyles }) => {
	return (
		<nav className={`${containerStyles}`}>
			<NavLink to={'/'} className={({isActive}) => isActive ? "active_link" : ""}><div className="fixedCenter gap-x-1"><MdHomeFilled />Home</div></NavLink>
			<NavLink to={'/mens'} className={({isActive}) => isActive ? "active_link" : ""}><div className="fixedCenter gap-x-1"><MdCategory />Mens</div></NavLink>
			<NavLink to={'/womans'} className={({isActive}) => isActive ? "active_link" : ""}><div className="fixedCenter gap-x-1"><MdShop2 />Womans</div></NavLink>
			<NavLink to={'/kids'} className={({isActive}) => isActive ? "active_link" : ""}><div className="fixedCenter gap-x-1"><MdContacts />Kids</div></NavLink>
		</nav>
	)
}

export default NavBar
