import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';
import { HelmetProvider } from 'react-helmet-async';

import GlobalStyles from './style/global';
import theme from './style/theme';
import { ThemeProvider } from 'styled-components';

import router from './routes/routing';

function App() {
	return (
		// <ErrorBoundary FallbackComponent={ErrorFallback}>
		//   <Suspense fallback={<Loading />}>
		<RecoilRoot>
			<HelmetProvider>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<RouterProvider router={router} />
				</ThemeProvider>
			</HelmetProvider>
		</RecoilRoot>
		//   </Suspense>
		// </ErrorBoundary>
	);
}

export default App;
