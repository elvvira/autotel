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
import { useContext, useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase.config';
import { AuthContext } from '../../contexts/Auth.context';

const Register = () => {
	const navigate = useNavigate();

	const [registerInfo, setRegisterInfo] = useState({
		email: '',
		password: '',
		confrimPassword: ''
	});
	return (
		<ContainerRegister>
			<StyledRegisterTitle>Regístrate</StyledRegisterTitle>
			<CloseRegister onClick={() => navigate('/')}>x</CloseRegister>
			<StyledForm onSubmit={e => handleSubmit(e, registerInfo, navigate)}>
				<div>
					<StyledInput
						type='email'
						name=''
						placeholder='email'
						onChange={e =>
							setRegisterInfo({
								...registerInfo,
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
							setRegisterInfo({
								...registerInfo,
								password: e.target.value
							})
						}
					/>
				</div>
				<ButtonRegister>Continúa</ButtonRegister>
			</StyledForm>
			<StyledBefore>o</StyledBefore>

			<ButtonApps>Continua con Facebook</ButtonApps>
			<ButtonApps onClick={loginWithGoogle}>Continua con Google</ButtonApps>
		</ContainerRegister>
	);
};
const handleSubmit = async (e, registerInfo, navigate) => {
	e.preventDefault();
	const { email, password } = registerInfo;
	try {
		await createUserWithEmailAndPassword(auth, email, password);
		navigate('/');
	} catch (err) {
		console.log(err);
	}
	e.target.reset();
};

const loginWithGoogle = async () => {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		console.log(credential);
	} catch (err) {
		console.log(err);
	}
};
export default Register;
