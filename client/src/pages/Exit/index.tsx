import Button from '../../components/common/Button';
import * as S from './index.styled';

function Exit() {
	return (
		<S.Body>
			<div>
				<S.Title>정말로 종료하시겠습니까?</S.Title>
			</div>

			<S.ButtonBox>
				<Button shape="red">예</Button>
				<Button shape="blue">아니요</Button>
			</S.ButtonBox>
		</S.Body>
	);
}

export default Exit;
