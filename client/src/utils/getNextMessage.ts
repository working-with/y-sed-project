type NextMessage = {
  [key: number]: string;
};

const nextMessage: NextMessage[] = [
  {
    // 0-1, 0-2
    0: `잘했어!\n 다음으로 넘어가 볼까?`,
    1: `좋았어!\n 다음 문제로 넘어가 보자~`,
  },
];

const getNextMessage = (exId: number, oxId: number): string => {
  return nextMessage[exId][oxId];
};

export default getNextMessage;
