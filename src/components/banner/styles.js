import styled from 'styled-components';

const ContainerBanner = styled.div`
	width: 120%;
	position: relative;
	left: -10%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	margin-bottom: 3rem;
	/* color: white; */
	font-weight: bold;
	padding: 2rem;
	/* background-color: #b3b3b3; */
	box-shadow: -7px 6px 59px -3px rgba(0, 0, 0, 0.14);
`;
const ImgCar = styled.img`
	width: 300px;
`;
export { ContainerBanner, ImgCar };
