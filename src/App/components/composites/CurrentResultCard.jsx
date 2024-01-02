const CurrentResultCard = ({ info }) => {
  return (
    <div className="currentResultCard">
      <h5 className="heading">{info.name}</h5>
      <p className="text">
        <span className="data">{info.data}</span>
        <span className="units">{info.units}</span>
      </p>
    </div>
  );
};

export default CurrentResultCard;
