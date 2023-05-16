import { useNavigate } from 'react-router-dom';
import {
	ButtonApps,
	ButtonRegister,
	CloseRegister,
	ContainerRegister,
	StyledBefore,
	StyledForm,
	StyledInput,
	StyledRegisterTitle
} from './styles';

const Register = () => {
	const navigate = useNavigate();

	return (
		<ContainerRegister>
			<StyledRegisterTitle>Regístrate</StyledRegisterTitle>
			<CloseRegister onClick={() => navigate('/')}>x</CloseRegister>
			<StyledForm>
				<div>
					<StyledInput type='text' name='' id='' placeholder='email' />
				</div>
				<div>
					<StyledInput type='text' name='' id='' placeholder='contraseña' />
				</div>
				<ButtonRegister>Contínua</ButtonRegister>
			</StyledForm>
			<StyledBefore>o</StyledBefore>

			<ButtonApps>Continua con Facebook</ButtonApps>
			<ButtonApps>Continua con Google</ButtonApps>
		</ContainerRegister>
	);
};
export default Register;
