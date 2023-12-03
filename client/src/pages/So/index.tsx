import Bottom from '../../components/common/Bottom';
import Graph from '../../components/common/Graph';
import COMMON from '../../constants/common';
import * as S from './index.styled';

function So() {
	return (
		<S.Body>
			<S.Content>
				<Graph />
			</S.Content>

			<Bottom button={true} color="bluePlay">
				{COMMON.SO}
			</Bottom>
		</S.Body>
	);
}

export default So;
