import { getDayOfTheWeek } from "../../utils";

const DailyResultsCard = ({ date, info, isSelected, onClick }) => {
  return (
    <div
      className={`dailyResultsCard ${isSelected ? "selectedDailyCard" : ""}`}
      onClick={onClick}
    >
      <h5 className="heading">{getDayOfTheWeek(date)}</h5>
      {info.map((field, index) => (
        <p key={index}>
          {field.name}: {field.data}
          {field.units}
        </p>
      ))}
    </div>
  );
};

export default DailyResultsCard;
