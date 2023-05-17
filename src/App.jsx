import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Router from './router/Router';
import { AuthProvider } from './Providers/Auth.provider';
const App = () => {
	return (
		<div>
			<GlobalStyles />
			<BrowserRouter>
				<AuthProvider>
					<Router />
				</AuthProvider>
			</BrowserRouter>
		</div>
	);
};

export default App;
