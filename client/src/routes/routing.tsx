import { createBrowserRouter } from 'react-router-dom';

import Layout from '../components/common/Layout';

import Home from '../pages/Home';
import Start from '../pages/Start';
import Tri from '../pages/Tri';
import Gui from '../pages/Gui';
import Exit from '../pages/Exit';
import Quiz01 from '../pages/Quiz01';
import Finish from '../pages/Finish';
import Next from '../pages/Next';
import So from '../pages/So';
import Beg from '../pages/Beg';

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
			// Quiz list
			{
				path: 'quiz01',
				element: <Quiz01 />,
			},
			{
				path: 'beg',
				element: <Beg />,
			},
			{
				path: 'so',
				element: <So />,
			},
			{
				path: 'next',
				element: <Next />,
			},
			{
				path: 'finish',
				element: <Finish />,
			},
		],
	},
]);

export default router;
