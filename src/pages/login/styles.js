import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const ContainerLogin = styled.div`
	width: 60%;
	margin-right: auto;
	margin-left: auto;
	margin-top: 3rem;

	border-radius: 2rem;
	background-color: ${COLORS.primary};
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	padding: 1rem;
	padding-top: 2rem;
	padding-bottom: 2rem;
	gap: 1rem;
`;

const StyledForm = styled.form`
	width: 80%;
	position: relative;
`;
const CloseLogin = styled.div`
	position: absolute;
	left: 30px;
	top: 22px;
	font-size: 2rem;
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

export { CloseLogin, StyledInput, StyledForm, ButtonRegister };

export { ContainerLogin };
