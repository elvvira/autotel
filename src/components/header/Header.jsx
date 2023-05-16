import { useNavigate } from 'react-router-dom';
import MenuUser from '../menuUser/MenuUser';
import { ContainerHeader, ContainerUser, ImgLogo, ImgUser } from './styles';
import { useState } from 'react';

const Header = () => {
	const [showInfoUser, setShowInfoUser] = useState(false);
	const navigate = useNavigate();

	return (
		<ContainerHeader>
			<div>
				<ImgLogo onClick={() => navigate('/')} src='assets/logo.png' alt='' />
			</div>

			{showInfoUser && <MenuUser setShowInfoUser={setShowInfoUser} />}

			<ContainerUser
				onClick={() =>
					showInfoUser ? setShowInfoUser(false) : setShowInfoUser(true)
				}
			>
				<ImgUser
					src={showInfoUser ? 'assets/close.png' : 'assets/menu.png'}
					alt=''
				/>
				<ImgUser src='assets/user.png' alt='' />
			</ContainerUser>
		</ContainerHeader>
	);
};

export default Header;
