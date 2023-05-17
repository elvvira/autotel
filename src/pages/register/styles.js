import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const ContainerRegister = styled.div`
	width: 60%;
	margin-right: auto;
	margin-left: auto;
	border-radius: 2rem;
	background-color: ${COLORS.primary};
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	padding: 1rem;
	padding-top: 2rem;
	gap: 1rem;
`;
const StyledRegisterTitle = styled.h2`
	margin-bottom: 1.5rem;
`;
const StyledForm = styled.form`
	width: 80%;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: white;
		bottom: -28px;
		right: 0;
	}
`;
const StyledInput = styled.input`
	background-color: transparent;
	border: 1px solid white;
	width: 100%;
	height: 40px;
	border-radius: 2rem;
	margin-bottom: 0.5rem;
	padding-left: 1rem;
	::placeholder {
		color: rgb(255, 255, 255, 0.5);
	}
`;
const CloseRegister = styled.div`
	position: absolute;
	left: 30px;
	top: 22px;
	font-size: 2rem;
`;
const ButtonRegister = styled.button`
	width: 100%;
	height: 40px;
	border-radius: 2rem;
	background-color: white;
	border: transparent;
	font-weight: bold;
	position: relative;
	border-top: 4px solid ${COLORS.dark};
`;
const StyledBefore = styled.div`
	background-color: ${COLORS.primary};
	width: 20px;
	text-align: center;
	z-index: 1;
`;
const ButtonApps = styled(ButtonRegister)`
	width: 80%;
	height: 40px;
	border-top: transparent;
`;

export {
	ContainerRegister,
	CloseRegister,
	StyledRegisterTitle,
	StyledInput,
	StyledForm,
	ButtonRegister,
	StyledBefore,
	ButtonApps
};
