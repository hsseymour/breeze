const HourlyResultWidget = ({ result }) => {
  console.warn("HOURLY WIDGET RERENDER");
  return (
    <div id="hourlyResultDiv">
      <h4>Hourly weather for {result.hourly.time[0].split("T")[0]}:</h4>
      <ul>
        {result.hourly.time.map((item, index) => (
          <li key={index}>
            <h6>
              {new Date(item).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </h6>
            <p>
              Temprature:
              {result.hourly.temperature_2m[index]}{" "}
              {result.hourly_units.temperature_2m}
            </p>
            <p>
              Feels like:
              {result.hourly.apparent_temperature[index]}{" "}
              {result.hourly_units.apparent_temperature}
            </p>
            <p>
              Precipitation:
              {result.hourly.precipitation_probability[index]}{" "}
              {result.hourly_units.precipitation_probability}
            </p>
            <p>
              Humidity:
              {result.hourly.relative_humidity_2m[index]}{" "}
              {result.hourly_units.relative_humidity_2m}
            </p>
            <p>
              Wind Speed:
              {result.hourly.wind_speed_10m[index]}{" "}
              {result.hourly_units.wind_speed_10m}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HourlyResultWidget;
