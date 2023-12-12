import * as S from "./index.styled";

export interface BottomProps {
  children: React.ReactNode;
  top?: boolean;
  color?: string;
  button?: boolean;
  onClick?: () => void;
}

function Bottom({ children, color, button, top, onClick }: BottomProps) {
  return (
    <S.Body top={top}>
      {!top && (
        <div>
          <S.Image src="/assets/img/icon/trlIcon.svg" />
          <S.Div>
            <span>연수리</span>
          </S.Div>
        </div>
      )}

      <S.Content>
        <pre>{children}</pre>
      </S.Content>

      {button && (
        <S.Button onClick={onClick}>
          <img src={`/assets/img/icon/${color ? color : "grayPlay"}.svg`} alt="button" />
        </S.Button>
      )}
    </S.Body>
  );
}

export default Bottom;
