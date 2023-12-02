import * as S from './index.styled';

interface ButtonProps {
	children: React.ReactNode;
	variant?: 'red' | 'orange' | 'green' | 'blue';
	shape?: 'red' | 'orange' | 'green' | 'blue';
	onClick?: () => void;
}

function Button({ children, variant, shape, onClick }: ButtonProps) {
	return (
		<S.Button variant={variant} shape={shape} onClick={onClick}>
			{children}
		</S.Button>
	);
}

export default Button;
