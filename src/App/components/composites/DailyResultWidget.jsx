import { useEffect, useState } from "react";

import { getDataInfo } from "../../utils";
import DailyResultsCard from "./DailyResultsCard";
import { ScrollButton } from "../common";

const DailyResultWidget = ({ result, setHourlyArgs }) => {
  const fields = [
    "precipitation_probability_max",
    "temperature_2m_max",
    "temperature_2m_min",
    "wind_speed_10m_max",
    "wind_direction_10m_dominant",
  ];

  const [selectedDay, setSelectedDay] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClick = (index, item) => {
    setSelectedDay(index);
    setHourlyArgs((prevState) => ({
      ...prevState,
      start: item,
      end: item,
    }));

    const container = document.getElementById("dailyResultsContainer");
    const card = container.children[index];

    setTimeout(() => {
      container.scrollTo({
        left: card.offsetLeft - container.offsetWidth / 2,
        behavior: "smooth",
      });
    }, 0);
  };

  return (
    <div className="dailyResultsDiv">
      <h4 className="heading">Daily weather:</h4>
      <div className="flexRow">
        <ScrollButton
          isLeft={true}
          isParentMounted={isMounted}
          scrollElement={"dailyResultsContainer"}
        />
        <div id="dailyResultsContainer" className="resultsContainer flexRow">
          {result.daily.time.map((item, index) => {
            let isSelected = index === selectedDay;
            return (
              <DailyResultsCard
                key={index}
                onClick={() => {
                  handleClick(index, item);
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
        <ScrollButton
          isLeft={false}
          isParentMounted={isMounted}
          scrollElement={"dailyResultsContainer"}
        />
      </div>
    </div>
  );
};

export default DailyResultWidget;
