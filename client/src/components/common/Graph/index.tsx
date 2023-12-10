import * as S from "./index.styled";

export interface GraphProps {
  onClick?: (index: number) => void;
  clicked?: boolean;
  index?: number | null;
}

function Graph({ onClick, index }: GraphProps) {
  const handleGraphClick = (index: number) => {
    if (onClick) {
      onClick(index);
    }
  };

  return (
    <S.Body>
      <S.First clicked={index === 0} onClick={() => handleGraphClick(0)} />
      <S.Second clicked={index === 1} onClick={() => handleGraphClick(1)} />
      <S.Third clicked={index === 2} onClick={() => handleGraphClick(2)} />
      <S.Fourth clicked={index === 3} onClick={() => handleGraphClick(3)} />
    </S.Body>
  );
}

export default Graph;
