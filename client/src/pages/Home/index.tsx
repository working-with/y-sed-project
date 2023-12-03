import { Link } from 'react-router-dom';

import * as S from './index.styled';

import Button from '../../components/common/Button';
import useCloseBtn from '../../hooks/useCloseBtn';

function Home() {
	useCloseBtn();

	return (
		<S.Body>
			<S.Content>
				<S.Wrapper>
					<S.TitleBox>
						<span>아동 이름</span>
					</S.TitleBox>
					<S.Input />
				</S.Wrapper>

				<S.Wrapper>
					<S.TitleBox>
						<span>아동 코드</span>
					</S.TitleBox>
					<S.Input />
				</S.Wrapper>

				<S.Wrapper>
					<S.TitleBox>
						<span>성별</span>
					</S.TitleBox>
					<S.Input />
				</S.Wrapper>

				<S.ButtonBox>
					<Button variant="green">엑셀 다운</Button>

					<Link to="/start">
						<Button variant="blue">시작하기</Button>
					</Link>
				</S.ButtonBox>
			</S.Content>
		</S.Body>
	);
}

export default Home;
