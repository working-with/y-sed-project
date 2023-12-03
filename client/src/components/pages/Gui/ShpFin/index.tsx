import * as S from './index.styled';

import Bottom from '../../../common/Bottom';
import Button from '../../../common/Button';

function ShpFin() {
	return (
		<>
			<S.Content>
				<Button variant="green">시작하기</Button>
			</S.Content>

			<Bottom button={true}>
				대단한데?
				<br />
				우리 이제 시작해볼까?
			</Bottom>
		</>
	);
}

export default ShpFin;

// Shp11
// 와! 좋았어.
// 다음으로 가볼까?
// color='bluePlay'
