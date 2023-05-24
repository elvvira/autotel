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
const ContianerYourProfile = styled.div`
	display: grid;
	grid-template-columns: 30% 60%;
	gap: 3rem;
`;
const ContainerLeftProfile = styled.div`
	text-align: left;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const StyledFormProfile = styled.form`
	text-align: left;
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
const ContainerPhotoProfile = styled.img`
	background-color: gray;
	width: 90%;

	height: 200px;
	border-radius: 2rem;
`;
const ContainerInputProfile = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;
const ButtonPatch = styled.button`
	width: 100%;
	height: 40px;
	border-radius: 2rem;
	background-color: gray;
	border: transparent;
	color: white;
	font-weight: bold;
`;
const StyledInputProfile = styled.input`
	height: 40px;
	border-radius: 2rem;
	border: 1px solid gray;
`;
export {
	ContainerCloseSesion,
	ButtonClose,
	ContianerYourProfile,
	StyledFormProfile,
	ContainerLeftProfile,
	ContainerInputProfile,
	ButtonPatch,
	StyledInputProfile,
	ContainerPhotoProfile
};
