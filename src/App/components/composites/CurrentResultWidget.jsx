const CurrentResultWidget = ({ result }) => {
  return (
    <div>
      <h4>Current weather:</h4>
      <ul className="flexRow wrap">
        <li className="flexChild-150x medium-gap">
          Temprature: {result.current["temperature_2m"]}{" "}
          {result.current_units["temperature_2m"]}
        </li>
        <li className="flexChild-150x medium-gap">
          Humidity: {result.current["relative_humidity_2m"]}{" "}
          {result.current_units["relative_humidity_2m"]}
        </li>
        <li className="flexChild-150x medium-gap">
          Precipiation: {result.current["precipitation"]}{" "}
          {result.current_units["precipitation"]}
        </li>
        <li className="flexChild-150x medium-gap">
          Wind Speed: {result.current["wind_speed_10m"]}{" "}
          {result.current_units["wind_speed_10m"]}
        </li>
        <li className="flexChild-150x medium-gap">
          Wind Direction: {result.current["wind_direction_10m"]}{" "}
          {result.current_units["wind_direction_10m"]}
        </li>
      </ul>
    </div>
  );
};

export default CurrentResultWidget;
