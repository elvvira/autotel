import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const ContainerSearch = styled.form`
	width: 100%;
	padding: 1rem;
	border-radius: 2rem;
	border: 1px solid ${COLORS.dark};
	display: flex;
	gap: 1rem;
`;

const StyledSearch = styled.div`
	position: relative;
	display: flex;
	&::before {
		content: '';
		position: absolute;
		width: 1px;
		height: 40px;
		background-color: gray;
		right: -10px;
		top: -6px;
	}
`;
const StyledInput = styled.input`
	border: transparent;
`;
const ImgSearch = styled.img`
	width: 60%;
`;
export { ContainerSearch, ImgSearch, StyledSearch, StyledInput };
