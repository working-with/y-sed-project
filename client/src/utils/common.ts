const common = (name: string) => {
  return {
    BEG: "이제 이야기를 들려줄거야!\n잘 들어보자.",
    QOX: `자, 이제부터 내가 들려주는\n말이 ${name}의 마음과\n같은지 아닌지 알려줘!`,
    SQX: `${name}도 그럴 것 같아?\n안 그럴 것 같아?`,
    SO: `그리고 얼만큼 ${name}와\n같은지 알려줄래?`,
    FIN1: `이제 끝이야!\n${name} 정말 대단한데?`,
    FIN2: "오늘 끝까지 열심히 참여해줘서 고마워!\n선생님한테 선물 꼭 받아가!",
  };
};

export default common;
