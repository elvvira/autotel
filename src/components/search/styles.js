import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const ContainerSearch = styled.form`
	width: 100%;
	height: 60px;
	padding: 1rem;
	border-radius: 2rem;
	border: 1px solid ${COLORS.dark};
	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: space-between;
	margin-bottom: 2rem;
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
	width: 20px;
`;
export { ContainerSearch, ImgSearch, StyledSearch, StyledInput };
