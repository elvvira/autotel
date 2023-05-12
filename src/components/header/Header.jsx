import { ContainerHeader, ContainerUser, ImgLogo, ImgUser } from './styles';
import { useState } from 'react';

const Header = () => {
	const [showInfoUser, setShowInfoUser] = useState();

	return (
		<ContainerHeader>
			<div>
				<ImgLogo src='public/assets/logo.png' alt='' />
			</div>
			<ContainerUser>
				<ImgUser src='public/assets/menu.png' alt='' />
				<ImgUser src='public/assets/user.png' alt='' />
			</ContainerUser>
		</ContainerHeader>
	);
};

export default Header;
