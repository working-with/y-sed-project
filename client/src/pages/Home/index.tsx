import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { userInfoAtom } from '../../recoil/atoms/user.atom';

import * as S from './index.styled';

import Button from '../../components/common/Button';
import useCloseBtn from '../../hooks/useCloseBtn';

function Home() {
	useCloseBtn();

	const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		setUserInfo((prev: any) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleStartClick = () => {};

	return (
		<S.Body>
			<S.Content>
				<S.Wrapper>
					<S.TitleBox>
						<span>아동 이름</span>
					</S.TitleBox>
					<S.Input name="name" onChange={handleChange} />
				</S.Wrapper>

				<S.Wrapper>
					<S.TitleBox>
						<span>아동 코드</span>
					</S.TitleBox>
					<S.Input name="code" onChange={handleChange} />
				</S.Wrapper>

				<S.Wrapper>
					<S.TitleBox>
						<span>성별</span>
					</S.TitleBox>
					<S.Input name="gender" onChange={handleChange} />
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
