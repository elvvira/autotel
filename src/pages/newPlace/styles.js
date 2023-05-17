import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
const ContainerNewPlace = styled.div`
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	flex-direction: column;
	gap: 2rem;
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
		bottom: -10px;
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
`;
const FormInformation = styled.form`
	display: grid;
	grid-template-columns: repeat(2, 57% 40%);
`;

const ContainerInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 1rem;
`;
const StyledInputPlace = styled.input`
	width: 380px;
	height: 40px;
	padding-left: 1rem;
	border-radius: 2rem;
	border: 1px solid black;
`;
const InputInfoPlace = styled(StyledInputPlace)`
	width: 320px;
	height: 310px;
`;
export {
	ContainerNewPlace,
	ContainerImages,
	ContainerImage,
	ButtonImage,
	ContainerInput,
	FormInformation,
	StyledInputPlace,
	InputInfoPlace
};
