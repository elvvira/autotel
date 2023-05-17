import { useState } from 'react';
import {
	ButtonRegister,
	CloseLogin,
	ContainerLogin,
	StyledForm,
	StyledInput
} from './styles';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';

const Login = () => {
	const [loginInfo, setLoginInfo] = useState({
		email: '',
		password: ''
	});
	const navigate = useNavigate();
	return (
		<ContainerLogin>
			<h2>Inicio Sesión</h2>
			<CloseLogin onClick={() => navigate('/')}>x</CloseLogin>
			<StyledForm onSubmit={e => handleSubmit(e, loginInfo, navigate)}>
				<div>
					<StyledInput
						type='text'
						name=''
						placeholder='email'
						onChange={e =>
							setLoginInfo({
								...loginInfo,
								email: e.target.value
							})
						}
					/>
				</div>
				<div>
					<StyledInput
						type='password'
						name=''
						placeholder='contraseña'
						onChange={e =>
							setLoginInfo({
								...loginInfo,
								password: e.target.value
							})
						}
					/>
				</div>
				<ButtonRegister>Contínua</ButtonRegister>
			</StyledForm>
		</ContainerLogin>
	);
};
const handleSubmit = async (e, loginInfo, navigate) => {
	e.preventDefault();

	const { email, password } = loginInfo;
	try {
		await signInWithEmailAndPassword(auth, email, password);
		navigate('/');
	} catch (err) {
		console.log(err);
	}
};

export default Login;
