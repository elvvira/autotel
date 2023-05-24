import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth.context';

const YourFav = () => {
	const { currentUser } = useContext(AuthContext);

	return <div>fav</div>;
};
export default YourFav;
