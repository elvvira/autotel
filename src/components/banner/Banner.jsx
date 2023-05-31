import { ContainerBanner, ImgCar } from './styles';

const Banner = () => {
	return (
		<ContainerBanner>
			<div>
				<h1>
					Encuentra tu <br /> plaza de garaje ideal <br /> y alquila con
					confianza
				</h1>
				<p>
					Tu espacio protegido, <br />
					tu vehículo seguro <br />
					alquila tu plaza de garaje
				</p>
			</div>

			<ImgCar src='assets/logo-car.png' alt='' />
		</ContainerBanner>
	);
};
export default Banner;
