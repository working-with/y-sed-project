import * as S from './index.styled';

export interface BottomProps {
	children: React.ReactNode;
	color?: string;
	button?: boolean;
}

function Bottom({ children, color, button }: BottomProps) {
	return (
		<S.Body>
			<div>
				<S.Image src="/assets/img/icon/trlIcon.svg" />
				<S.Div>
					<span>연수리</span>
				</S.Div>
			</div>

			<S.Content>
				<pre>{children}</pre>
			</S.Content>

			{button && (
				<S.Button>
					<img src={`/assets/img/icon/${color ? color : 'grayPlay'}.svg`} />
				</S.Button>
			)}
		</S.Body>
	);
}

export default Bottom;
