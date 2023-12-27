const getHeader = () => {
  const header = [
    { label: "code", key: "code" },
    { label: "name", key: "name" },
    { label: "sex", key: "gender" },
  ];

  for (let i = 0; i < 10; i++) {
    for (let j = 1; j < 4; j++) {
      const label = `n_0${i}_0${j}SOX`;
      const label2 = `n_0${i}_0${j}SO`;

      const key = `${i}-${j}-booleanAnswer`;
      const key2 = `${i}-${j}-scaleAnswer`;

      header.push(
        {
          label,
          key,
        },
        {
          label: label2,
          key: key2,
        },
      );
    }
  }

  return header;
};

export default getHeader;
