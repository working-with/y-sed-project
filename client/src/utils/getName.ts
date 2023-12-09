const getName = (userName: string) => {
  const name = userName.slice(1, 3);
  const charCode = name.charCodeAt(name.length - 1);

  //유니코드의 한글 범위 내에서 해당 코드의 받침 확인
  const consonantCode = (charCode - 44032) % 28;

  if (consonantCode === 0) {
    return `${name}`;
  }

  return `${name}이`;
};

export default getName;
