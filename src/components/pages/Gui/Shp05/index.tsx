import * as S from './index.styled';

import Bottom from '../../../common/Bottom';
import IconBox from '../../../common/IconBox';

function Shp05() {
	return (
		<S.Body>
			<S.Image src="/assets/img/icon/click.svg" />

			<S.Content>
				<IconBox iconName="smileIcon" />
				<IconBox iconName="sadIcon" />
			</S.Content>

			<Bottom>
				그럼 우리가 방금 배운거
				<br />
				간단하게 실험 해볼까?
			</Bottom>
		</S.Body>
	);
}

export default Shp05;
