import styled from 'styled-components';
import { ContainerPlaces } from '../home/styles';
import { ImagePost } from '../places/styles';
import { COLORS } from '../../constants/colors';

const ContainerYourPosts = styled(ContainerPlaces)`
	background-color: transparent;
`;

const YourPostImg = styled(ImagePost)`
	border-radius: 2rem;
`;
const ImageFooter = styled.div`
	display: flex;
	text-align: left;
	justify-content: space-between;
	padding: 1rem;
`;
const IconEdit = styled.img`
	width: 20px;
`;

const ModalTrash = styled.div`
	position: relative;
	width: 70%;
	height: 90px;
	margin-right: auto;
	margin-left: auto;
	border-radius: 2rem;
	display: flex;
	flex-direction: column;
	padding: 1rem;
	color: white;
	font-weight: bold;
	background-color: ${COLORS.primary};
	display: ${({ showTrash }) => (showTrash ? 'block' : 'none')};
`;
const StyledButtonTrash = styled.button`
	width: 70px;
	color: white;
	border: 1px solid white;
	margin-right: 1rem;
	margin-top: 0.5rem;
`;
const StyledButtonTrashNo = styled(StyledButtonTrash)`
	background-color: black;
	border: transparent;
`;
export {
	ContainerYourPosts,
	YourPostImg,
	ImageFooter,
	IconEdit,
	ModalTrash,
	StyledButtonTrash,
	StyledButtonTrashNo
};
