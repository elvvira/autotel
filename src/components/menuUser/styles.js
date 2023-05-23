import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const MenuContainer = styled.div`
	height: 40px;
	border-radius: 2rem;
	background-color: ${COLORS.primary};
	font-weight: bold;
	padding: 0 2rem 0 2rem;
`;
const StyledUl = styled.ul`
	color: white;
	display: flex;
	flex-direction: row;
	gap: 2rem;
	justify-content: center;
	margin-top: 10px;
`;
export { MenuContainer, StyledUl };
