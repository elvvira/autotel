import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const Modal = ({ post }) => {
	const { currentUser } = useContext(AuthContext);

	console.log(post);
	return (
		<div>
			<div>
				<img src='' alt='' />
			</div>
		</div>
	);
};
export default Modal;
