import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerImgPlaces, HeartIcon, ImagePost } from './styles';

const Places = ({ post }) => {
	const [favIcon, setFavIcon] = useState(false);
	const navigate = useNavigate();

	return (
		<div>
			<ContainerImgPlaces>
				<ImagePost
					onClick={() => navigate(`Modal`, { state: post })}
					src={post.img}
					alt=''
				/>

				<HeartIcon
					onClick={() => (favIcon ? setFavIcon(false) : setFavIcon(true))}
					src={favIcon ? 'assets/heart-solid.svg' : 'assets/heart-regular.svg'}
					alt=''
				/>
			</ContainerImgPlaces>
			<div>
				<p>{post.location}</p>
				<p>{post.price}€/hora</p>
			</div>
		</div>
	);
};
export default Places;
