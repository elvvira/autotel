import Header from '../header/Header';
import Search from '../search/Search';
import { ContainerHome } from './styles';

const Home = () => {
	return (
		<ContainerHome>
			<Header />
			<Search />
		</ContainerHome>
	);
};
export default Home;
