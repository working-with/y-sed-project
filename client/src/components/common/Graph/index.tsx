// Graph 컴포넌트
import * as S from "./index.styled";
import { useState } from "react";

export interface GraphProps {
  onGraphItemClick?: (index: number) => void;
  clicked?: boolean;
}

function Graph({ onGraphItemClick }: GraphProps) {
  const [clickedIndices, setClickedIndices] = useState<number[]>([]);

  const handleGraphItemClickInternal = (index: number) => {
    // 클릭된 상태를 토글
    const updatedIndices = [...clickedIndices];
    const indexInArray = updatedIndices.indexOf(index);

    if (indexInArray === -1) {
      updatedIndices.push(index);
    } else {
      updatedIndices.splice(indexInArray, 1);
    }

    setClickedIndices(updatedIndices);

    if (onGraphItemClick) {
      onGraphItemClick(index);
    }
  };

  return (
    <S.Body>
      <S.First clicked={clickedIndices.includes(0)} onClick={() => handleGraphItemClickInternal(0)} />
      <S.Second clicked={clickedIndices.includes(1)} onClick={() => handleGraphItemClickInternal(1)} />
      <S.Third clicked={clickedIndices.includes(2)} onClick={() => handleGraphItemClickInternal(2)} />
      <S.Fourth clicked={clickedIndices.includes(3)} onClick={() => handleGraphItemClickInternal(3)} />
    </S.Body>
  );
}

export default Graph;
