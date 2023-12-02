import * as S from './index.styled';

import Bottom from '../../../common/Bottom';
import Graph from '../../../common/Graph';

// Shp11 과 동일
function Shp10() {
	return (
		<>
			<S.Content>
				<Graph />
			</S.Content>

			<Bottom button={true}>
				얼만큼 [아동이름]이
				<br />
				마음과 같은지 알려줄래?
			</Bottom>
		</>
	);
}

export default Shp10;

// Shp11
// 와! 좋았어.
// 다음으로 가볼까?
// color='bluePlay'
