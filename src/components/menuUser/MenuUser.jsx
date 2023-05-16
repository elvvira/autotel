import { NavLink } from 'react-router-dom';
import { MenuContainer, StyledUl } from './styles';

const MenuUser = () => {
	return (
		<MenuContainer>
			<nav>
				<StyledUl>
					<li>
						<NavLink to='Register'>Registrate</NavLink>
					</li>
					<li>
						<NavLink to='Login'>Inicio Sesión</NavLink>
					</li>
					<li>
						<NavLink to='NewPlace'>Sube tu plaza</NavLink>
					</li>
				</StyledUl>
			</nav>
		</MenuContainer>
	);
};
export default MenuUser;
