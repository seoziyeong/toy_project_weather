const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export const getEndPoint = (kind, lat, lon) => {
  if (kind === "current")
    return `${API_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  if (kind === "hourly")
    return `${API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  if (kind === "air")
    return `${API_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
};
