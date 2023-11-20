const CurrentResultWidget = ({ result }) => {
  return (
    <div id="currentResultDiv">
      <h4>Current weather:</h4>
      <ul>
        <li>
          Temprature: {result.current["temperature_2m"]}{" "}
          {result.current_units["temperature_2m"]}
        </li>
        <li>
          Humidity: {result.current["relative_humidity_2m"]}{" "}
          {result.current_units["relative_humidity_2m"]}
        </li>
        <li>
          Precipiation: {result.current["precipitation"]}{" "}
          {result.current_units["precipitation"]}
        </li>
        <li>
          Wind Speed: {result.current["wind_speed_10m"]}{" "}
          {result.current_units["wind_speed_10m"]}
        </li>
        <li>
          Wind Direction: {result.current["wind_direction_10m"]}{" "}
          {result.current_units["wind_direction_10m"]}
        </li>
      </ul>
    </div>
  );
};

export default CurrentResultWidget;
