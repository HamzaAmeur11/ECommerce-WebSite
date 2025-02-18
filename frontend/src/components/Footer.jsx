import { Link } from "react-router-dom"
import FOOTER_LINKS from "../assets/footer_links"
import FOOTER_CONTACT_INFO from '../assets/footer_contact'
import SOCIALS from "../assets/socials"

const Footer = () => {
	return (
		<footer className="pt-20 pb-24 flexCenter">
			<div className="flex flex-col w-full max_padd_container gap-14">
				<div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
					<Link to={'/'} className="mb-10 bold-20">Shoppe</Link>
					<div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
						{FOOTER_LINKS.map((col) => (
							<FooterColumn title={col.title} key={col.title}>
								<ul className="flex flex-col gap-4 regular-14 text-gray-20">
									{col.links.map((link) => (
										<Link to={'/'} key={link}>{link}</Link>
									))}
								</ul>
							</FooterColumn>
						))}
						<div className="flex flex-col gap-5">
							<FooterColumn title={FOOTER_CONTACT_INFO.title}>
								{FOOTER_CONTACT_INFO.links.map((link) => (
									<Link to={"/"} key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
										<p>{link.label}: </p><p>{link.value}</p>
									</Link>
								))}
							</FooterColumn>
						</div>
						<div className="">
							<FooterColumn >
								<ul>
									{SOCIALS.links.map((link) =>(
										<Link to={"/"} key={link}><img src={link} alt="socialIcon" height={22} width={22}/></Link>
									))}
								</ul>
							</FooterColumn>
						</div>
					</div>
				</div>
				<div className="border bg-gray-20"></div>
				<p className="text-center regular-14 text-gray-30">2024 Shoppe | All right reserved.</p>
			</div>
		</footer>
	)
};

const FooterColumn = ({title, children}) => {
	return (
		<div className="flex flex-col gap-5">
			<h4 className="whitespace-nowrap bold-18">{title}</h4>
			{children}
		</div>
	)
}

export default Footer
