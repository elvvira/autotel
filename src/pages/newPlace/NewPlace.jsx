import {
	ButtonImage,
	ContainerImage,
	ContainerImages,
	ContainerNewPlace
} from './styles';

const NewPlace = () => {
	return (
		<ContainerNewPlace>
			<h3>Sube aqui las fotos de tu plaza</h3>
			<ContainerImages>
				<ContainerImage>
					<ButtonImage>+</ButtonImage>
					<img src='' alt='' />
				</ContainerImage>
				<ContainerImage>
					<ButtonImage>+</ButtonImage>
					<img src='' alt='' />
				</ContainerImage>
				<ContainerImage>
					<ButtonImage>+</ButtonImage>
					<img src='' alt='' />
				</ContainerImage>
			</ContainerImages>

			<div>
				<form action=''>
					<input type='text' name='' id='' />
				</form>
			</div>
		</ContainerNewPlace>
	);
};

export default NewPlace;
