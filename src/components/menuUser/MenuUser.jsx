import { NavLink } from 'react-router-dom';
import { MenuContainer, StyledUl } from './styles';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const MenuUser = () => {
	const { currentUser } = useContext(AuthContext);

	return (
		<MenuContainer>
			<nav>
				<StyledUl>
					{currentUser ? (
						<li>
							<NavLink to='NewPlace'>Sube tu plaza</NavLink>
						</li>
					) : (
						<li>
							<NavLink to='Login'>Inicia Sesión</NavLink>
						</li>
					)}
					{currentUser ? (
						<li>
							<NavLink to='Profile'>Profile</NavLink>
						</li>
					) : (
						<li>
							<NavLink to='Register'>Registrate</NavLink>
						</li>
					)}
				</StyledUl>
			</nav>
		</MenuContainer>
	);
};
export default MenuUser;
