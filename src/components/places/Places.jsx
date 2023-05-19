import { ImagePost } from './styles';

const Places = ({ post }) => {
	return (
		<div>
			<ImagePost src={post.img} alt='' />
			<div>
				<p>{post.location}</p>
				<p>{post.price}€/hora</p>
			</div>
		</div>
	);
};
export default Places;
