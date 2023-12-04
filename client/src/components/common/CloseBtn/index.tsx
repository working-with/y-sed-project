import { useNavigate } from 'react-router-dom';
import * as S from './index.styled';

function CloseBtn() {
	const navigate = useNavigate();

	const handleClick = () => {
		if (window.confirm('설문 조사를 그만하시겠습니까?')) navigate('/');
		else return;
	};

	return <S.Image src="/assets/img/icon/grayX.svg" onClick={handleClick} />;
}

export default CloseBtn;
