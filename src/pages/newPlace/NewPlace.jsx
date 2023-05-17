import {
	ButtonImage,
	ContainerImage,
	ContainerImages,
	ContainerInput,
	ContainerNewPlace,
	FormInformation,
	InputInfoPlace,
	StyledInputPlace
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
				<FormInformation>
					<div>
						<ContainerInput>
							<label htmlFor=''>¿Donde se encuentra tu plaza?</label>
							<StyledInputPlace
								type='text'
								name=''
								id=''
								placeholder='ubicación...'
							/>
						</ContainerInput>
						<ContainerInput>
							<label htmlFor=''>¿Donde se encuentra tu plaza?</label>
							<StyledInputPlace
								type='text'
								name=''
								id=''
								placeholder='moto, biplaza, furgoneta....'
							/>
						</ContainerInput>
						<ContainerInput>
							<label htmlFor=''>¿Que tamaño tiene tu plaza?</label>
							<StyledInputPlace type='text' name='' id='' placeholder='m2...' />
						</ContainerInput>
					</div>
					<div>
						<ContainerInput>
							<label htmlFor=''>Información sobre tú plaza</label>
							<InputInfoPlace
								type='text'
								name=''
								id=''
								placeholder='Lorem ipsum dolor sit amet...'
							/>
						</ContainerInput>
					</div>
				</FormInformation>
			</div>
		</ContainerNewPlace>
	);
};

export default NewPlace;
