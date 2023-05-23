import styled from 'styled-components';
import { ContainerPlaces } from '../home/styles';
import { ImagePost } from '../places/styles';

const ContainerYourPosts = styled(ContainerPlaces)`
	background-color: transparent;
`;

const YourPostImg = styled(ImagePost)`
	border-radius: 2rem;
`;

export { ContainerYourPosts, YourPostImg };
