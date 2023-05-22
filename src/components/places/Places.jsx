import { useNavigate } from 'react-router-dom';
import { ImagePost } from './styles';

const Places = ({ post }) => {
	const navigate = useNavigate();

	return (
		<div onClick={() => navigate(`/modal/${post}`)}>
			<ImagePost src={post.img} alt='' />
			<div>
				<p>{post.location}</p>
				<p>{post.price}€/hora</p>
			</div>
		</div>
	);
};
export default Places;
