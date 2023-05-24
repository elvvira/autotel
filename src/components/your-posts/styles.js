import styled from 'styled-components';
import { ContainerPlaces } from '../home/styles';
import { ImagePost } from '../places/styles';

const ContainerYourPosts = styled(ContainerPlaces)`
	background-color: transparent;
`;

const YourPostImg = styled(ImagePost)`
	border-radius: 2rem;
`;
const ImageFooter = styled.div`
	display: flex;
	text-align: left;
	justify-content: space-between;
	padding: 1rem;
`;
const IconEdit = styled.img`
	width: 20px;
`;
export { ContainerYourPosts, YourPostImg, ImageFooter, IconEdit };
