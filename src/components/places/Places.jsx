import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerImgPlaces, HeartIcon, ImagePost } from './styles';

const Places = ({ post }) => {
	const [fav, setFav] = useState(false);
	const navigate = useNavigate();

	return (
		<div onClick={() => navigate(`Modal`, { state: post })}>
			<ContainerImgPlaces>
				<ImagePost src={post.img} alt='' />
				{/* <HeartIcon
					onClick={setFav(true)}
					src={
						fav
							? 'public/assets/heart-regular.svg'
							: 'public/assets/heart-solid.svg'
					}
					alt=''
				/> */}
			</ContainerImgPlaces>
			<div>
				<p>{post.location}</p>
				<p>{post.price}€/hora</p>
			</div>
		</div>
	);
};
export default Places;
