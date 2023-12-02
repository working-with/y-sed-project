import * as S from './index.styled';

import Graph from '../../../common/Graph';
import Bottom from '../../../common/Bottom';

function Shp07() {
	return (
		<S.Body>
			<S.Content>
				<S.Image src="/assets/img/icon/click.svg" />

				<S.Line />

				<S.ImageTwo src="/assets/img/icon/click.svg" />
				<Graph />
			</S.Content>

			<Bottom button={true}>
				그리고 얼만큼 [아동이름]이와
				<br />
				같은지 알려줄래?
			</Bottom>
		</S.Body>
	);
}

export default Shp07;
