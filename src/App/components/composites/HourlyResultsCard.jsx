const HourlyResultsCard = ({ info, time }) => {
  return (
    <div className="hourlyResultsCard">
      <h6 className="heading">{time}</h6>
      {info.map((field, index) => (
        <p key={index}>
          {field.name}: {field.data}
          {field.units}
        </p>
      ))}
    </div>
  );
};

export default HourlyResultsCard;
