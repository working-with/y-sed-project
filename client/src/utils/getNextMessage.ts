const nextMessage = [
  // 1-1, 1-2
  `잘했어!\n다음으로 넘어가 볼까?`,
  `좋았어!\n다음 문제로 넘어가 보자~`,

  // 2-1, 2-2
  `아주 훌륭해!\n다음 문제로 넘어가 볼까?`,
  `정말 잘했어!\n다음으로 넘어가 보자!`,

  // 3-1, 3-2
  `오~ 훌륭한 걸?\n다음으로 넘어가보자!`,
  `멋있어!\n다음으로 넘어가 볼까?`,

  // 4-1, 4-2
  `잘했어!\n우리 또 해볼까?`,
  `좋았어!\n다음 문제로 넘어가 보자!`,

  // 5-1 5-2
  `오~ 훌륭한 걸?\n다음으로 넘어가보자!`,
  `잘했어!\n다음으로 넘어가 볼까?`,

  // 6-1 6-2
  `좋았어!\n다음 문제로 넘어가 보자!`,
  `아주 훌륭해!\n다음 문제로 넘어가 보자!`,

  // 7-1 7-2
  `잘했어!\n우리 다음으로 넘어가 볼까?`,
  `멋있어!\n다음 문제로 넘어가 보자!`,

  // 8-1 8-2
  `아주 훌륭해!\n다음으로 넘어가 볼까?`,
  `좋았어!\n다음으로 넘어가 볼까?`,

  // 9-1 9-2
  `좋았어!\n다음 문제로 넘어가 보자!`,
  `잘했어!\n다음으로 넘어가 볼까?`,
];

const getRandomNext = () => {
  return nextMessage[Math.floor(Math.random() * (17 - 0 + 1) + 0)];
};

export default getRandomNext;
