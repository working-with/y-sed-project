const common = (name: string) => {
  return {
    BEG: "이제 이야기를 들려줄게.\n잘 들어보자.",
    BEG_N: "이제 다음 이야기를 들려줄게.\n잘 들어보자.",
    QOX: `이제 내가 하는 말이 ${name}의 마음과 같은지 아닌지 알려줘!`,
    SO: `그렇구나, 얼마나 그럴 것 같니?`,
    FIN1: `이제 끝이야!\n${name} 정말 대단한데?`,
    FIN2: "오늘 끝까지 열심히 참여해줘서 고마워!\n선생님한테 선물 꼭 받아가!",
  };
};

export default common;
