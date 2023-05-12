import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const ContainerHeader = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 2rem;
`;

const ContainerUser = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	border: 3px solid ${COLORS.primary};
	border-radius: 2rem;
	padding: 0.5rem;
`;
const ImgLogo = styled.img`
	width: 150px;
`;
const ImgUser = styled.img`
	width: 20px;
`;
export { ContainerHeader, ImgLogo, ImgUser, ContainerUser };
