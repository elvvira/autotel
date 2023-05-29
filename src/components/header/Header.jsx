import { useNavigate } from 'react-router-dom';
import MenuUser from '../menuUser/MenuUser';
import {
	ContainerHeader,
	ContainerMenu,
	ContainerUser,
	ImgLogo,
	ImgUser
} from './styles';
import { useState } from 'react';

const Header = () => {
	const [showInfoUser, setShowInfoUser] = useState(false);
	const navigate = useNavigate();

	return (
		<ContainerHeader>
			<div>
				<ImgLogo onClick={() => navigate('/')} src='assets/logo.png' alt='' />
			</div>
			<ContainerMenu>
				{showInfoUser && <MenuUser setShowInfoUser={setShowInfoUser} />}

				<ContainerUser onClick={() => setShowInfoUser(!showInfoUser)}>
					<ImgUser
						src={showInfoUser ? 'assets/close.png' : 'assets/menu.png'}
						alt=''
					/>
					<ImgUser src='assets/user.png' alt='' />
				</ContainerUser>
			</ContainerMenu>
		</ContainerHeader>
	);
};

export default Header;
