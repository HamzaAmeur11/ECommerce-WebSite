import {TbArrowRight} from 'react-icons/tb'

const ProductHd = (props) => {
	const {product} = props;
	return (
		<div className='flex flex-wrap items-center my-4 capitalize gap-x-2 medium-16'>
			Home <TbArrowRight /> Shop <TbArrowRight /> {product.category} <TbArrowRight/> {product.name}
		</div>
	)
}

export default ProductHd
