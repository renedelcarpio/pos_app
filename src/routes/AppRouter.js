import { BrowserRouter, Route, Routes } from 'react-router-dom';

import DashboardRoutes from './DashboardRoutes';
import NotLoggedRoutes from './NotLoggedRoutes';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import React from 'react';

const AppRouter = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path='/*'
						element={
							<PublicRoute>
								<NotLoggedRoutes />
							</PublicRoute>
						}
					/>
					<Route
						path='/*'
						element={
							<PrivateRoute>
								<DashboardRoutes />
							</PrivateRoute>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default AppRouter;
