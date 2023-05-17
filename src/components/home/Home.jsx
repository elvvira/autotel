import Search from '../search/Search';
import { ContainerHome, ImagePost } from './styles';

const Home = () => {
	return (
		<ContainerHome>
			<Search />
			<div>
				<div>
					<ImagePost src='' alt='' />
					<div>
						<p>Madrid, España</p>
						<p>10eur /día</p>
					</div>
				</div>
			</div>
		</ContainerHome>
	);
};
export default Home;
