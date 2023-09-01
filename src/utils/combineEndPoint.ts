const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

// 매개변수를 활용하여 api endPoint를 조합하는 함수
export const combineEndPoint = (kind: string, lat: number, lon: number) => {
  if (kind === "current") return `${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  if (kind === "hourly") return `${API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  if (kind === "air") return `${API_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
};
