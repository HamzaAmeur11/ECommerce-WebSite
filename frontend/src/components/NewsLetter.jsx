
const NewsLetter = () => {
  return (
	<section className="pt-12 bg-white max_padd_container xl:py-28">
		<div className="mx-auto xl:w-[80%] flexCenter flex-col gap-y-8 w-full max-w-[666px]">
			<h3 className="h3">Get Exclusive offers on Your Email</h3>
			<h4 className="uppercase bold-18">Subscribe to our newsletter and stay update</h4>
			<div className="w-full rounded-full flexBetween ring-1 ring-slate-900/5 hover:ring-slate-900/15 bg-primary max-w-[588px]">
				<input type="email"  placeholder="Your email address" className="w-full bg-transparent border-none outline-none regular-16 ml-7"/>
				<button className="btn_dark_rounded">Subscribe</button>
			</div>
		</div>

	</section>
  )
}

export default NewsLetter
