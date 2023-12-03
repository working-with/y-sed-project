import styled from 'styled-components';
import { bodyContainer, flexCenter, height } from '../../../../style/common';

export const Body = styled.div`
	${bodyContainer}
`;

export const Content = styled.div`
	${height}
	${flexCenter}
	gap: 45px;
`;

export const Image = styled.img`
	width: 184.498px;
	height: 304px;
	position: absolute;
	z-index: 2;
	transform: translate(-330%, 100%);
`;

export const ImageTwo = styled.img`
	width: 184.498px;
	height: 304px;
	position: absolute;
	z-index: 2;
	transform: translate(430%, 30%);
`;

export const Line = styled.div`
	width: 1009.643px;
	height: 8px;
	position: absolute;
	z-index: 2;
	transform: rotate(-12deg);
	background: ${({ theme }) => theme.PALETTE.black};
	top: 28%;
	left: 29.5%;
`;
