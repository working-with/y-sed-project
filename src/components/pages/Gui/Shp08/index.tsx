import Bottom from '../../../common/Bottom';
import Graph from '../../../common/Graph';
import * as S from './index.styled';

function Shp08() {
	return (
		<>
			<S.Content>
				<Graph />
			</S.Content>

			<Bottom button={true} color="bluePlay">
				잘했어!
				<br />
				이제 옆에 파란 버튼을 눌러보자.
			</Bottom>
		</>
	);
}

export default Shp08;
