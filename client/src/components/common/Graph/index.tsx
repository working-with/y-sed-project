import { useState } from "react";

import * as S from "./index.styled";

export interface GraphProps {
  onGraphClick?: (index: number) => void;
  clicked?: boolean;
}

function Graph({ onGraphClick }: GraphProps) {
  const [clickedGraph, setClickedGraph] = useState<number | null>(null);

  const handleGraphClick = (index: number) => {
    if (onGraphClick) {
      onGraphClick(index);
      setClickedGraph(index);
    }
  };

  return (
    <S.Body>
      <S.First clicked={clickedGraph === 0} onClick={() => handleGraphClick(0)} />
      <S.Second clicked={clickedGraph === 1} onClick={() => handleGraphClick(1)} />
      <S.Third clicked={clickedGraph === 2} onClick={() => handleGraphClick(2)} />
      <S.Fourth clicked={clickedGraph === 3} onClick={() => handleGraphClick(3)} />
    </S.Body>
  );
}

export default Graph;
