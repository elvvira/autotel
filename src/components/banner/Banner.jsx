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
					Encuentra tu plaza de garaje ideal <br /> y alquila con confianza
				</p>
			</div>

			<ImgCar src='assets/logo-car.png' alt='' />
		</ContainerBanner>
	);
};
export default Banner;
