import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/common/Layout';

import Home from '../pages/Home';
import Start from '../pages/Start';
import Tri from '../pages/Tri';
import Gui from '../pages/Gui';
import Exit from '../pages/Exit';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '',
				element: <Home />,
			},
			{
				path: 'start',
				element: <Start />,
			},
			{
				path: 'tri',
				element: <Tri />,
			},
			{
				path: 'gui',
				element: <Gui />,
			},
			{
				path: 'exit',
				element: <Exit />,
			},
		],
	},
]);

export default router;
