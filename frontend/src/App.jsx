import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Home from './pages/Home'
import Product from './pages/Product';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Footer from './components/Footer';



export default function App() {
	return (
		<main className="bg-primary text-tertiary">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/mens' element={<Category />} />
					<Route path='/womans' element={<Category />} />
					<Route path='/kids' element={<Category />} />
					<Route path='/product' element={<Product />} >
						<Route path=':productId' element={<Product/>}/>
					</Route>
					<Route path='/cart-page' element={<Cart />} />
					<Route path='/login' element={<Login />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</main>
	)
}
