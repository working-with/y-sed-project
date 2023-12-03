import { useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './index.styled';

import Button from '../../components/common/Button';
import useCloseBtn from '../../hooks/useCloseBtn';

function Start() {
	useCloseBtn();

	const [click, setClick] = useState(false);

	const onClick = () => {
		setClick(true);
	};

	return (
		<S.Body>
			<S.TitleBox>
				{!click && <img src="/assets/img/icon/smileIcon.svg" />}
				{click && <span>안녕 [아동 이름]~!</span>}
			</S.TitleBox>

			<S.ButtonBox>
				<Button variant="blue" onClick={onClick}>
					{click ? <Link to="/tri">안녕?</Link> : '시작하기'}
				</Button>
			</S.ButtonBox>
		</S.Body>
	);
}

export default Start;
