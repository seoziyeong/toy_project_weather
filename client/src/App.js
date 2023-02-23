import "./App.css";
import axios from "axios";

function App() {
  // async function getData() {
  //   return await axios
  //     .get(
  //       "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst"
  //     )
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => err.message);
  // }
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <>
      <div className="header">
        <h4>방배동</h4>
        <h4>2월 20일(월) 18:30</h4>
      </div>
      <div className="mainbanner">
        <div className="wearedCard"></div>
      </div>
      <div className="time">
        <h2>시간대별 날씨</h2>
        <div className="content"></div>
      </div>
    </>
  );
}

export default App;
