import "./resources/stylesheet.css";
import { hourly, daily, current, geocoding } from "./api";

const Main = () => {
  const getHourlyData = async () => {
    await hourly({ args: { lat: "50.867485", long: "-1.305177" } }).then(
      (result) => console.log(result)
    );
  };
  const getDailyData = async () => {
    await daily({ args: { lat: "50.867485", long: "-1.305177" } }).then(
      (result) => console.log(result)
    );
  };
  const getCurrentData = async () => {
    await current({ args: { lat: "50.867485", long: "-1.305177" } }).then(
      (result) => console.log(result)
    );
  };
  const getGeocodingData = async () => {
    await geocoding({ args: { name: "southampton" } }).then((result) =>
      console.log(result)
    );
  };

  getHourlyData();
  getDailyData();
  getCurrentData();
  getGeocodingData();

  return <div>Hello World!</div>;
};

export default Main;
