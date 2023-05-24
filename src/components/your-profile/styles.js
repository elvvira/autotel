import styled from 'styled-components';

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
export { ContainerCloseSesion, ButtonClose };
