import { getDayOfTheWeek } from "../../utils";

const DailyResultsCard = ({ date, info }) => {
  return (
    <div className="dailyResultsCard">
      <h5 className="heading">{getDayOfTheWeek(date)}</h5>
      {info.map((field) => (
        <p>
          {field.name}: {field.data}
          {field.units}
        </p>
      ))}
    </div>
  );
};

export default DailyResultsCard;
