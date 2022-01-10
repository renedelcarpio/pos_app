import { Route, Routes } from 'react-router-dom';

import ClientListScreen from '../components/screens/ClientListScreen/ClientListScreen';
import ConfigScreen from '../components/screens/ConfigScreen/ConfigScreen';
import InvoiceListScreen from '../components/screens/InvoiceListScreen/InvoiceListScreen';
import InvoiceScreen from '../components/screens/InvoiceScreen/InvoiceScreen';
import Navbar from '../components/Navbar/Navbar';
import ProductListScreen from '../components/screens/ProductListScreen/ProductListScreen';
import SalesScreen from '../components/screens/SalesScreen/SalesScreen';

const DashboardRoutes = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='sales' element={<SalesScreen />} />
				<Route path='invoice' element={<InvoiceScreen />} />
				<Route path='products' element={<ProductListScreen />} />
				<Route path='invoices' element={<InvoiceListScreen />} />
				<Route path='clients' element={<ClientListScreen />} />
				<Route path='config' element={<ConfigScreen />} />
			</Routes>
		</>
	);
};

export default DashboardRoutes;
