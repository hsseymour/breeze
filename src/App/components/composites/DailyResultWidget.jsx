import { useState } from "react";
import { getDataInfo } from "../../utils";
import DailyResultsCard from "./DailyResultsCard";

const DailyResultWidget = ({ result, setHourlyArgs }) => {
  const fields = [
    "precipitation_probability_max",
    "temperature_2m_max",
    "temperature_2m_min",
    "wind_speed_10m_max",
    "wind_direction_10m_dominant",
  ];

  const [selectedDay, setSelectedDay] = useState(0);

  return (
    <div className="dailyResultsDiv">
      <h4 className="heading">Daily weather:</h4>

      <div className="resultsContainer flexRow">
        {result.daily.time.map((item, index) => {
          let isSelected = index === selectedDay;
          return (
            <DailyResultsCard
              onClick={() => {
                setSelectedDay(index);
                setHourlyArgs((prevState) => {
                  return { ...prevState, start: item, end: item };
                });
              }}
              isSelected={isSelected}
              date={item}
              info={getDataInfo(
                result.daily,
                result.daily_units,
                fields,
                index
              )}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DailyResultWidget;
