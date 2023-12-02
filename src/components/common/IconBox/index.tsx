import * as S from './index.styled';

interface IconProps {
	iconName: string;
}

function IconBox({ iconName }: IconProps) {
	return (
		<S.Icon>
			<img src={`/assets/img/icon/${iconName}.svg`} />
		</S.Icon>
	);
}

export default IconBox;
