import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const ContainerHeader = styled.div`
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 2rem;
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
const ContainerMenu = styled.div`
	display: flex;
	gap: 0.3rem;
`;
export { ContainerMenu, ContainerHeader, ImgLogo, ImgUser, ContainerUser };
