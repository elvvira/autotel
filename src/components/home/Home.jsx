import Place from '../places/Place';
import Search from '../search/Search';
import { ContainerHome } from './styles';

const Home = () => {
	return (
		<ContainerHome>
			<Search />

			<Place />
		</ContainerHome>
	);
};
export default Home;
