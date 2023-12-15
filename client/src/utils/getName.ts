const getName = (userName: string) => {
  const charCode = userName.charCodeAt(userName.length - 1);

  //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
  const consonantCode = (charCode - 44032) % 28;

  if (consonantCode === 0) {
    return `${userName}`;
  }

  return `${userName}이`;
};

export default getName;
