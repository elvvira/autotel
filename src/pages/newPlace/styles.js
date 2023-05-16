import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
const ContainerNewPlace = styled.div`
	width: 85%;
	margin-right: auto;
	margin-left: auto;
`;
const ContainerImages = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: ${COLORS.dark};
		bottom: -20px;
	}
`;
const ContainerImage = styled.div`
	width: 250px;
	height: 200px;
	border: 1px solid ${COLORS.dark};
	border-radius: 2rem;
	position: relative;
`;
const ButtonImage = styled.button`
	width: 50px;
	height: 50px;
	border-radius: 100%;
	color: white;
	font-size: 2rem;
	background-color: black;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 40%;
	/* transform: translateY(-50%); */
`;
export { ContainerNewPlace, ContainerImages, ContainerImage, ButtonImage };
