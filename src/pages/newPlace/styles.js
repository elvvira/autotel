import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
const ContainerNewPlace = styled.div`
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const FormInformation = styled.form`
	display: grid;
	grid-template-columns: 55% 40%;
	grid-template-rows: 300px 400px 200px;
`;
const StylesInputFile = styled.input`
	width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`;
const LabelFile = styled.label`
	background-color: black;
	border-radius: 2rem;
	color: white;
	width: 240px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const ContainerImages = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	position: relative;
	grid-row: 1/2;
	grid-column: 1/-1;
	&::after {
		content: '';
		position: absolute;
		width: 50%;
		height: 1px;
		background-color: ${COLORS.dark};
		bottom: 30px;
	}
`;
const ContainerImage = styled.img`
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

const ContainerInput = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	margin-bottom: 1rem;
`;
const StyledInputPlace = styled.input`
	width: 90%;
	height: 40px;
	padding-left: 1rem;
	border-radius: 2rem;
	border: 1px solid black;
	&:hover {
		border-color: ${COLORS.primary};
	}
`;
const InputInfoPlace = styled(StyledInputPlace)`
	width: 90%;

	height: 310px;
`;

const InputInfoDuo = styled(StyledInputPlace)`
	width: 70%;

	margin-right: 1rem;
`;
const StyledSelect = styled.select`
	width: 110px;
	height: 40px;
	border-radius: 1.5rem;
	padding-left: 0.8rem;
	border: 1px solid black;
	&:hover {
		border-color: ${COLORS.primary};
	}
`;
const ButtonPlace = styled.button`
	width: 60%;
	height: 50px;
	border-radius: 2rem;
	grid-column: 1/3;
	grid-row: 3/3;
	background-color: black;
	color: white;
	margin-right: auto;
	margin-left: auto;
	&:hover {
		width: 255px;
		height: 45px;
	}
`;
export {
	ContainerNewPlace,
	ContainerImages,
	ContainerImage,
	ButtonImage,
	ContainerInput,
	FormInformation,
	StyledInputPlace,
	InputInfoPlace,
	InputInfoDuo,
	StyledSelect,
	ButtonPlace,
	StylesInputFile,
	LabelFile
};
