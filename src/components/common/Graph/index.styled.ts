import styled from 'styled-components';

export const Body = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 35px;

	> div {
		border-radius: 24px;
		/* background: ${({ theme }) => theme.PALETTE.gray}; */
	}
`;

export const First = styled.div`
	width: 250px;
	height: 250px;
	background: ${({ theme }) => theme.PALETTE.gray};
`;

export const Second = styled.div`
	width: 325px;
	height: 325px;
	background: ${({ theme }) => theme.PALETTE.orange[400]};
`;

export const Third = styled.div`
	width: 426px;
	height: 425px;
	background: ${({ theme }) => theme.PALETTE.gray};
`;

export const Fourth = styled.div`
	width: 550px;
	height: 550px;
	background: ${({ theme }) => theme.PALETTE.gray};
`;
