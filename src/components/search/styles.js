import styled from 'styled-components';
import 'react-calendar/dist/Calendar.css';

import { COLORS } from '../../constants/colors';
import Calendar from 'react-calendar';
const ContainerCalendarSearch = styled.div`
	width: 100%;
	position: relative;
`;
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
const StyledDay = styled.div`
	color: gray;
	font-size: 0.9rem;
	margin-right: 5rem;
	cursor: pointer;
`;
const StyledInput = styled.input`
	border: transparent;
`;
const ImgSearch = styled.img`
	width: 20px;
`;
const CalendarReact = styled(Calendar)`
	margin-bottom: 2rem;
	border-radius: 2rem;
	padding: 2rem;
	position: absolute;
	left: 30%;
	z-index: 10;
`;
export {
	ContainerCalendarSearch,
	ContainerSearch,
	ImgSearch,
	StyledSearch,
	StyledInput,
	StyledDay,
	CalendarReact
};
