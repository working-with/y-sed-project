const NEXT_MESSAGE: Record<number, string> = {
  1: `잘했어!\n다음 이야기로 넘어가 볼까?`,
  2: `정말 잘했어!\n다음 이야기로 넘어가 볼까?`,
  3: `멋있어!\n다음 이야기로 넘어가 볼까?`,
  4: `정말 잘했어!\n다음 이야기로 넘어가 볼까?`,
  5: `오~ 대단해!\n다음 이야기로 넘어가 볼까?`,
  6: `좋았어!\n다음 이야기로 넘어가 볼까?`,
  7: `아주 잘했어!\n다음 이야기로 넘어가 볼까?`,
  8: `정말 훌륭해!\n마지막 이야기로 넘어가 볼까?`,
} as const;

export default NEXT_MESSAGE;
