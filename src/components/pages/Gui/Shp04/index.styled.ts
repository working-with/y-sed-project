import styled from 'styled-components';
import { bodyContainer, flexCenter, height } from '../../../../style/common';

export const Body = styled.div`
	${bodyContainer}
`;

export const Content = styled.div`
	${height}
	${flexCenter}
`;

export const Image = styled.img`
	position: absolute;
	z-index: 2;
	transform: translate(-380%, 90%);
	/* transform: translate(-200%, 90%); // second */
	/* transform: translate(20%, 90%); // third  */
	/* transform: translate(300%, 90%); // fourth */
`;
