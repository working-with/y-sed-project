import { useEffect, useState } from 'react';

import * as S from './index.styled';

import Bottom from '../../components/common/Bottom';
import IconBox from '../../components/common/IconBox';

function Gui() {
	const [ment, setMent] = useState<boolean>(false);
	const [background, setBackground] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setMent(true);
		}, 10000);

		setBackground(true);
	}, []);

	return (
		<S.Body>
			<S.Content>
				{background && (
					<>
						<S.Image src="/assets/img/icon/click.svg" />
						<S.Div>
							<div>
								<img src="/assets/img/icon/blueO.svg" />
								<img src="/assets/img/icon/redX.svg" />
							</div>
						</S.Div>
					</>
				)}

				<S.ImageBox>
					<IconBox iconName="smileIcon" />
					<IconBox iconName="angryIcon" />
					<IconBox iconName="sadIcon" />
					<IconBox iconName="happyIcon" />
				</S.ImageBox>
			</S.Content>

			<Bottom>
				{!ment &&
					'각 이야기 마다, [아동 이름]이가\n느낄 수 있는 다양한 마음이 있어.'}
				{ment && '이야기가 끝난 후에는 내가\n이 마음에 대해 물어볼건데,'}
			</Bottom>
		</S.Body>
	);
}

export default Gui;
