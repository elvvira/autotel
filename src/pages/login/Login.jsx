import {
	ButtonRegister,
	CloseLogin,
	ContainerLogin,
	StyledForm,
	StyledInput
} from './styles';

const Login = () => {
	return (
		<ContainerLogin>
			<h2>Inicio Sesión</h2>
			<CloseLogin onClick={() => navigate('/')}>x</CloseLogin>
			<StyledForm>
				<div>
					<StyledInput type='text' name='' id='' placeholder='email' />
				</div>
				<div>
					<StyledInput type='text' name='' id='' placeholder='contraseña' />
				</div>
				<ButtonRegister>Contínua</ButtonRegister>
			</StyledForm>
		</ContainerLogin>
	);
};

export default Login;
