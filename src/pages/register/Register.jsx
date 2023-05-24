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
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithPopup
} from 'firebase/auth';
import { auth, usersCollectionReference } from '../../config/firebase.config';
import { useForm } from 'react-hook-form';
import { FORM_VALIDATIONS } from '../../constants/validations';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase.config';
const Register = () => {
	const navigate = useNavigate();

	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm({ mode: 'onBlur' });
	return (
		<ContainerRegister>
			<StyledRegisterTitle>Regístrate</StyledRegisterTitle>
			<CloseRegister onClick={() => navigate('/')}>x</CloseRegister>
			<StyledForm
				onSubmit={handleSubmit((data, e) => onSubmit(data, e, navigate))}
			>
				<div>
					<StyledInput
						type='text'
						name='email'
						{...register('email', {
							required: FORM_VALIDATIONS['email'].require,
							pattern: {
								value: FORM_VALIDATIONS['email'].pattern,
								message: FORM_VALIDATIONS['email'].message
							}
						})}
						placeholder='email'
					/>
					{errors.email && <p>{errors.email.message}</p>}
				</div>
				<div>
					<StyledInput
						type='password'
						name='password'
						placeholder='contraseña'
						{...register('password', {
							required: FORM_VALIDATIONS['password'].require,
							pattern: {
								value: FORM_VALIDATIONS['password'].pattern,
								message: FORM_VALIDATIONS['password'].message
							}
						})}
					/>
				</div>
				<ButtonRegister>Continúa</ButtonRegister>
			</StyledForm>
			<StyledBefore>o</StyledBefore>

			{/* <ButtonApps>Continua con Facebook</ButtonApps> */}
			<ButtonApps onClick={() => loginWithGoogle(navigate)}>
				Continua con Google
			</ButtonApps>
		</ContainerRegister>
	);
};
const onSubmit = async (data, e, navigate) => {
	e.preventDefault();
	const { email, password } = data;
	const userInfo = {
		favorites: [],
		userDescription: '',
		userName: '',
		userPhoto: ''
	};
	try {
		const newUser = await createUserWithEmailAndPassword(auth, email, password);
		await setDoc(doc(db, 'users', newUser.uid), userInfo);

		navigate('/');
	} catch (err) {
		console.log(err);
	}
	e.target.reset();
};

const loginWithGoogle = async navigate => {
	const provider = new GoogleAuthProvider();
	try {
		const result = await signInWithPopup(auth, provider);
		const credential = GoogleAuthProvider.credentialFromResult(result);
		console.log(credential);
		navigate('/');
	} catch (err) {
		console.log(err);
	}
};

export default Register;
