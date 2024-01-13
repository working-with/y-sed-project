type NextMessage = {
  [key: number]: string;
};

const nextMessage: NextMessage[] = [
  {
    // 0-1, 0-2
    0: `잘했어!`,
    1: `좋았어!`,
  },
];

const getNextMessage = (exId: number, oxId: number): string => {
  return nextMessage[exId][oxId];
};

export default getNextMessage;
