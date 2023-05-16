import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';

const App = () => {
	return (
		<div>
			<GlobalStyles />
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</div>
	);
};

export default App;
