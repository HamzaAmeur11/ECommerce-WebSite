
const Login = () => {
	return (
		<section className="flex-col pt-32 max_padd_container flexCenter">
			<div className="max-w-[555px] h-[600px] bg-white m-auto px-14 py-10 rounded-md">
				<h3 className="h3">Sign Up</h3>
				<div className="flex flex-col gap-4 mt-7">
					<input type="text" placeholder="Your Name" className="w-full pl-5 outline-none h-14 bg-slate-900/5 rounded-xl"/>
					<input type="email" placeholder="Email Address" className="w-full pl-5 outline-none h-14 bg-slate-900/5 rounded-xl"/>
					<input type="password" placeholder="Password" className="w-full pl-5 outline-none h-14 bg-slate-900/5 rounded-xl"/>
				</div>
				<button className="w-full my-5 btn_dark_rounded !rounded-md" >Continue</button>
				<p className="font-bold text-black">Already have an account? <span className='underline cursor-pointer text-secondary'>login</span></p>
				<div className="gap-3 mt-6 flexCenter">
					<input type="checkbox" name="" id=""/>
					<p>By continuing, i agree to the terms of use & privacy policy</p>
				</div>
			</div>
		</section>
	)
}

export default Login
