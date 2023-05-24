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

const TitleMode = styled.p`
	color: ${({ active }) => (active ? 'black' : 'white')};
`;
export { ContainerProfile, ContainerUlProfile, ContainerNav, TitleMode };
