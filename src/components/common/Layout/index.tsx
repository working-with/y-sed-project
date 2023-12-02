import { Outlet } from 'react-router-dom';
import CloseBtn from '../CloseBtn';
import { useRecoilValue } from 'recoil';
import { includeCloseState } from '../../../recoil/atoms/closeBtn.atom';

function Layout() {
	const includeClose = useRecoilValue(includeCloseState);

	return (
		<>
			{includeClose && <CloseBtn />}
			<Outlet />
		</>
	);
}

export default Layout;
