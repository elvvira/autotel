import styled from 'styled-components';

const ContainerProfile = styled.div`
	text-align: center;
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 85%;
	margin-right: auto;
	margin-left: auto;
	position: relative;
	cursor: pointer;
`;
const ContainerNav = styled.nav`
	width: 100%;
	background-color: gray;
	padding: 0rem 3rem 0rem 3rem;
	border-radius: 2rem;
	color: white;
	font-weight: bold;
`;
const ContainerUlProfile = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	gap: 1rem;
`;
const ContainerCloseSesion = styled.div`
	width: 120%;
	height: 130px;
	position: fixed;
	left: -10%;
	bottom: 0;
	background-color: black;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;
const ButtonClose = styled.button`
	background-color: white;
	color: black;
	border: transparent;
`;
const TitleMode = styled.p`
	color: ${({ active }) => (active ? 'black' : 'white')};
`;
export {
	ContainerProfile,
	ContainerUlProfile,
	ContainerNav,
	ContainerCloseSesion,
	ButtonClose,
	TitleMode
};
