import { NavLink } from 'react-router-dom';
import { MenuContainer, StyledUl } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const MenuUser = ({ setShowInfoUser }) => {
	const { currentUser } = useContext(AuthContext);

	return (
		<MenuContainer>
			<nav>
				<StyledUl>
					{currentUser ? (
						<li>
							<NavLink to='NewPlace' onClick={() => setShowInfoUser(false)}>
								Sube tu plaza
							</NavLink>
						</li>
					) : (
						<li>
							<NavLink to='Login' onClick={() => setShowInfoUser(false)}>
								Inicia Sesión
							</NavLink>
						</li>
					)}
					{currentUser ? (
						<li>
							<NavLink to='Profile' onClick={() => setShowInfoUser(false)}>
								Profile
							</NavLink>
						</li>
					) : (
						<li>
							<NavLink to='Register' onClick={() => setShowInfoUser(false)}>
								Registrate
							</NavLink>
						</li>
					)}
				</StyledUl>
			</nav>
		</MenuContainer>
	);
};
export default MenuUser;
