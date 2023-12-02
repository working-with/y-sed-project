import * as S from './index.styled';

import Bottom from '../../../common/Bottom';

interface Shp06Props {
	sad: boolean;
}

const imgUrl = {
	smile: '/assets/img/icon/smileIcon.svg',
	sad: '/assets/img/icon/sadIcon.svg',
};

// shp09랑 공용
function Shp06({ sad }: Shp06Props) {
	return (
		<S.Body>
			<S.Content>
				<S.Image src={sad ? imgUrl.sad : imgUrl.smile} />
			</S.Content>

			<Bottom>{sad ? `"나는 지금 슬퍼요."` : `"나는 지금 재미있어요!"`}</Bottom>
		</S.Body>
	);
}

export default Shp06;
