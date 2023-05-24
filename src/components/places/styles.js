import styled from 'styled-components';
const ContainerImgPlaces = styled.div`
	position: relative;
`;
const ImagePost = styled.img`
	width: 230px;
	height: 230px;
	object-fit: cover;
	border-radius: 2rem;
	background-color: gray;
`;

const HeartIcon = styled.img`
	position: absolute;
	bottom: -25px;
	right: 20px;
	width: 25px;
`;
export { ContainerImgPlaces, ImagePost, HeartIcon };
