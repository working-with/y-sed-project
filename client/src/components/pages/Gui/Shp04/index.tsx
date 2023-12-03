import * as S from './index.styled';

import Bottom from '../../../common/Bottom';
import Graph from '../../../common/Graph';

// gui04 ~ guiShp04
function Gui04() {
	return (
		<S.Body>
			<S.Content>
				<S.Image src="/assets/img/icon/click.svg" />
				<Graph />
			</S.Content>

			<Bottom>
				그리고 얼만큼 [아동이름]이와
				<br />
				같은지 알려줄래?
			</Bottom>
		</S.Body>
	);
}

export default Gui04;

// 가장 작은 네모는 너의 마음과
// 아주 조금 비슷하다는 걸 말해.

// 그다음 네모는 너의 마음과
// 약간 비슷하다는 거야.

// 그 다음 네모는 너의 마음과
// 꽤 많이 비슷하다는 뜻이고,

// 마지막 가장 큰 네모는 너의 마음과
// 아주 많이 비슷하다는거야!
