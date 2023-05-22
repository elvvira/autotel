import { Route, Routes } from 'react-router-dom';
import Layout from '../layouts/Layout';
import Register from '../pages/register/Register';
import Home from '../components/home/Home';
import Login from '../pages/login/Login';
import NewPlace from '../pages/newPlace/NewPlace';
import Profile from '../pages/profile/Profile';
import Modal from '../pages/modal/Modal';

const Router = () => {
	return (
		<Routes>
			<Route path={'/'} element={<Layout />}>
				<Route index element={<Home />}></Route>
				<Route path='/Register' element={<Register />} />
				<Route path='/Login' element={<Login />} />
				<Route path='/NewPlace' element={<NewPlace />} />
				<Route path='/Profile' element={<Profile />} />
				<Route path='/Modal' element={<Modal />} />
			</Route>
		</Routes>
	);
};
export default Router;
