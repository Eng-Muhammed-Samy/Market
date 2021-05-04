/** @format */
import './Product.scss';
const Product = (props) => {
	return (
		<div className='col-sm-12 justify-content-center col-md-6 col-lg-4 col-xl-3'>
			<div className='product-item'>
				<img
					src='https://static.wixstatic.com/media/ad420a_ff4d6acf76634f0583713f2150fc5edf~mv2.jpg/v1/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01/ad420a_ff4d6acf76634f0583713f2150fc5edf~mv2.webp'
					alt=''
				/>
				<h5>{props.name}</h5>
				<h6>$9.85 {props.price}</h6>
				<div>
					<input className='form-control' type='number' />
					<button
						className='btn btn-outline-dark mt-3 form-control'
						type='submit'>
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};
export default Product;
