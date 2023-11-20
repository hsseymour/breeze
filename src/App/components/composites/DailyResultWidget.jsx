import { useState } from "react";

const DailyResultWidget = ({ dailyResult, hourlyResult }) => {
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
  const [hourlyWidgetIndex, setHourlyWidgetIndex] = useState(0);

  return (
    <div>
      <h4>Daily weather:</h4>
      <ul>
        {dailyResult.daily.time.map((item, index) => (
          <li
            key={index}
            className="inlineLI"
            onClick={() => setHourlyWidgetIndex(index * 24)}
          >
            <h5>{dayOfWeek[new Date(item).getDay()]}</h5>
            <p>
              {dailyResult.daily.precipitation_probability_max[index]}{" "}
              {dailyResult.daily_units.precipitation_probability_max}
            </p>
            <p>
              {dailyResult.daily.temperature_2m_max[index]}{" "}
              {dailyResult.daily_units.temperature_2m_max}
            </p>
            <p>
              {dailyResult.daily.temperature_2m_min[index]}{" "}
              {dailyResult.daily_units.temperature_2m_min}
            </p>
            <p>
              {dailyResult.daily.wind_direction_10m_dominant[index]}{" "}
              {dailyResult.daily_units.wind_direction_10m_dominant}
            </p>
            <p>
              {dailyResult.daily.wind_speed_10m_max[index]}{" "}
              {dailyResult.daily_units.wind_speed_10m_max}
            </p>
          </li>
        ))}
      </ul>
      {hourlyResult && (
        <div>
          <ul>
            {hourlyResult.hourly.time
              .slice(hourlyWidgetIndex, hourlyWidgetIndex + 24)
              .map((item, index) => (
                <li key={index} className="inlineLI">
                  <h6>
                    {new Date(item).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </h6>
                  <p>
                    Temprature:
                    {
                      hourlyResult.hourly.temperature_2m[
                        hourlyWidgetIndex + index
                      ]
                    }{" "}
                    {hourlyResult.hourly_units.temperature_2m}
                  </p>
                  <p>
                    Feels like:
                    {
                      hourlyResult.hourly.apparent_temperature[
                        hourlyWidgetIndex + index
                      ]
                    }{" "}
                    {hourlyResult.hourly_units.apparent_temperature}
                  </p>
                  <p>
                    Precipitation:
                    {
                      hourlyResult.hourly.precipitation_probability[
                        hourlyWidgetIndex + index
                      ]
                    }{" "}
                    {hourlyResult.hourly_units.precipitation_probability}
                  </p>
                  <p>
                    Humidity:
                    {
                      hourlyResult.hourly.relative_humidity_2m[
                        hourlyWidgetIndex + index
                      ]
                    }{" "}
                    {hourlyResult.hourly_units.relative_humidity_2m}
                  </p>
                  <p>
                    Wind Speed:
                    {
                      hourlyResult.hourly.wind_speed_10m[
                        hourlyWidgetIndex + index
                      ]
                    }{" "}
                    {hourlyResult.hourly_units.wind_speed_10m}
                  </p>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DailyResultWidget;
