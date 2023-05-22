import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const ModalContainer = styled.div`
	width: 85%;
	position: relative;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
`;
const IconBack = styled.img`
	width: 20px;
	position: absolute;
	left: -50px;
	top: -65px;
`;
const ModalImage = styled.img`
	border-radius: 2rem;
	width: 50%;
	height: 300px;
`;
const ModalContainerInfo = styled.div`
	display: grid;
	grid-template-columns: 65% 30%;
	gap: 1rem;
`;
const ContainerPrice = styled.div`
	background-color: ${COLORS.primary};
	color: white;
	padding: 1rem;
	border-radius: 2rem;
	height: 150px;
	text-align: center;
`;

const ButtonReserve = styled.div`
	background-color: white;
	border: transparent;
	color: black;
	height: 40px;
	border-radius: 2rem;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export {
	ModalContainer,
	ModalImage,
	IconBack,
	ModalContainerInfo,
	ContainerPrice,
	ButtonReserve
};
