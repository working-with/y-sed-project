import MESSAGE from "../constants/message";

interface checkInputProps {
  name: string;
  code: string;
  gender: number;
}

const validateInput = (value: checkInputProps) => {
  return [
    {
      checked: !value.name || value.name.length === 0,
      message: MESSAGE.CHECK.NAME,
    },
    {
      checked: !value.code || value.code.length === 0,
      message: MESSAGE.CHECK.CODE,
    },
    {
      checked: value.gender !== 0 && value.gender !== 1,
      message: MESSAGE.CHECK.GENDER,
    },
  ];
};

export default validateInput;
