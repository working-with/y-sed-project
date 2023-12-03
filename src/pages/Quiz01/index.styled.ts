import styled from 'styled-components';
import { bodyContainer, flexCenter, height } from '../../style/common';

export const Body = styled.div`
	${bodyContainer}
`;

export const Content = styled.div<{ quiz?: boolean }>`
	${flexCenter}
	${height}
	flex-direction: column;
	gap: 60px;

	> img:last-child {
		width: 1401px;
		height: 862px;
	}
`;
