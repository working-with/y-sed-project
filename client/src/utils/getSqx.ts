interface SqxProps {
  name: string;
  exId: number;
  oxId: number;
}

type SqxOXData = {
  [key: number]: string;
};

type SqxData = {
  SQX: SqxOXData[number];
};

const getSqx = ({ name, exId, oxId }: SqxProps): SqxData => {
  const sqxData: SqxOXData[] = [
    // 0
    {
      0: `${name}도 그럴것 같니?\n안그럴것 같니?`,
      1: `${name}도 그럴것 같니?\n안그럴것 같니?`,
      2: `${name}도 그럴것 같니?\n안그럴것 같니?`,
    },

    // 1
    {
      0: `${name}도 마음이 안 좋을 것 같니?`,
      1: `${name}도 신경쓰지 않을 것 같니?`,
      2: `${name}도 마음이 안 좋을 것 같니?`,
    },

    // 2
    {
      0: `${name}도 괜찮을 것 같니?`,
      1: `${name}도 괜찮을 것 같니?`,
      2: `${name}도 슬플 것 같니?`,
    },

    // 3
    {
      0: `${name}도 안 됐다고 느낄 것 같니?`,
      1: `${name}도 신경쓰지 않을 것 같니?`,
      2: `${name}도 마음이 불편할 것 같니?`,
    },

    // 4
    {
      0: `${name}도 마음이 좋지 않을 것 같니?`,
      1: `${name}도 마음이 불편할 것 같니?`,
      2: `${name}도 행복할 것 같니?`,
    },

    // 5
    {
      0: `${name}도 괜찮을 것 같니?`,
      1: `${name}도 괜찮을 것 같니?`,
      2: `${name}도 스스로에게 화가 날 것 같니?`,
    },

    // 6
    {
      0: `${name}도 마음이 안 좋을 것 같니?`,
      1: `${name}도 마음이 불편할 것 같니?`,
      2: `${name}도 행복할 것 같니?`,
    },

    // 7
    {
      0: `${name}도 마음이 안 좋을 것 같니?`,
      1: `${name}도 신경쓰지 않을 것 같니?`,
      2: `${name}도 마음이 불편할 것 같니?`,
    },

    // 8
    {
      0: `${name}도 마음이 불편할 것 같니?`,
      1: `${name}도 마음이 불편할 것 같니?`,
      2: `${name}도 행복할 것 같니?`,
    },

    // 9
    {
      0: `${name}도 괜찮을 것 같니?`,
      1: `${name}도 괜찮을 것 같니?`,
      2: `${name}도 스스로에게 화가 날 것 같니?`,
    },
  ];

  return { SQX: sqxData[exId][oxId] };
};

export default getSqx;
