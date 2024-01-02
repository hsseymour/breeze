const DailyResultWidget = ({ result, setHourlyArgs }) => {
  console.warn("DAILY WIDGET RERENDER");
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div>
      <h4>Daily weather:</h4>
      <ul>
        {result.daily.time.map((item, index) => (
          <li
            key={index}
            onClick={() =>
              setHourlyArgs((prevState) => {
                return { ...prevState, start: item, end: item };
              })
            }
          >
            <h5>{dayOfWeek[new Date(item).getDay()]}</h5>
            <p>
              {result.daily.precipitation_probability_max[index]}{" "}
              {result.daily_units.precipitation_probability_max}
            </p>
            <p>
              {result.daily.temperature_2m_max[index]}{" "}
              {result.daily_units.temperature_2m_max}
            </p>
            <p>
              {result.daily.temperature_2m_min[index]}{" "}
              {result.daily_units.temperature_2m_min}
            </p>
            <p>
              {result.daily.wind_direction_10m_dominant[index]}{" "}
              {result.daily_units.wind_direction_10m_dominant}
            </p>
            <p>
              {result.daily.wind_speed_10m_max[index]}{" "}
              {result.daily_units.wind_speed_10m_max}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyResultWidget;
