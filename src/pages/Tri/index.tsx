import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './index.styled';

import Bottom from '../../components/common/Bottom';
import useCloseBtn from '../../hooks/useCloseBtn';

function Tri() {
	useCloseBtn();

	const navigate = useNavigate();

	useEffect(() => {
		setTimeout(() => {
			navigate('/gui');
		}, 10000);
	}, []);

	return (
		<S.Body>
			<S.ImgBox>
				<img src="/assets/img/storyImg/1/1-G1.svg" />
				<img src="/assets/img/storyImg/7/7-G1.svg" />
			</S.ImgBox>

			<Bottom>
				내가 [아동 이름]이나 다른 아이들에게
				<br />
				일어날 수 있는 몇 가지 이야기를
				<br />
				읽어줄거야. 잘 들어줄 수 있지?
			</Bottom>
		</S.Body>
	);
}

export default Tri;
