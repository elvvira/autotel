import { useLocation, useNavigate } from 'react-router-dom';
import {
	ButtonReserve,
	ContainerPrice,
	IconBack,
	ModalContainer,
	ModalContainerInfo,
	ModalImage
} from './styles';

const Modal = () => {
	const navigate = useNavigate();

	const { state: post } = useLocation();
	{
		return (
			<ModalContainer>
				<ModalImage src={post.img} alt='' />

				<IconBack
					onClick={() => navigate('/')}
					src='assets/icon-back.png'
					alt=''
				/>

				<h2>Anfitrión ...</h2>
				<ModalContainerInfo>
					<div>
						<div>
							<h3>Información sobre esta plaza</h3>
							<p>{post.info}</p>
						</div>
						<div>
							<h3>¿Dónde se queda mi coche?</h3>
							<p>{post.location}</p>
						</div>
						<div>
							<h3>¿Para qué tipo de vehículo?</h3>
							<p>{post.type}</p>
						</div>
						<div>
							<h3>¿Qué tamaño tiene la plaza?</h3>
							<p>{post.size}</p>
						</div>
					</div>
					<ContainerPrice>
						<h3>
							{post.price}€ / <span>{post.interval}</span>
						</h3>

						<ButtonReserve>Reservar</ButtonReserve>
					</ContainerPrice>
				</ModalContainerInfo>
			</ModalContainer>
		);
	}
};

export default Modal;
