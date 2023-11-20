const ShowLocationTitle = ({ coordinates }) => {
  const { name, lat, long } = coordinates;
  return (
    <div>
      {name && <h2>{name}</h2>}
      <h3>
        <span>Latitude: {lat} </span>
        <span>Longitude: {long}</span>
      </h3>
    </div>
  );
};

export default ShowLocationTitle;
