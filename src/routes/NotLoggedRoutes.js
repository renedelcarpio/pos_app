import { Route, Routes } from 'react-router-dom';

import HomeScreen from '../components/screens/HomeScreen/HomeScreen';
import LoginScreen from '../components/screens/LoginScreen/LoginScreen';

const NotLoggedRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<HomeScreen />} />
			<Route path='login' element={<LoginScreen />} />
		</Routes>
	);
};

export default NotLoggedRoutes;
