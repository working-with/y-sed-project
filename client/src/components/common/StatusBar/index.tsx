interface StatusProps {
  status: number;
}

interface PercentageImages {
  [key: number]: string;
}

const percentage: PercentageImages = {
  11: "/assets/img/icon/0.svg",
  0: "/assets/img/icon/Q1.svg",
  1: "/assets/img/icon/Q2.svg",
  2: "/assets/img/icon/Q3.svg",
  100: "/assets/img/icon/100.svg",
};

function StatusBar({ status }: StatusProps) {
  // status에 해당하는 이미지 URL을 가져오기
  const imageUrl = percentage[status] || "/assets/img/icon/default.svg";

  return <img src={imageUrl} alt="statusBar" />;
}

export default StatusBar;
