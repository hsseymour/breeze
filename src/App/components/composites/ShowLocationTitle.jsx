const ShowLocationTitle = ({ coordinates }) => {
  const { name, lat, long } = coordinates;
  return (
    <div>
      {name && <h2>{name}</h2>}
      <h3>
        Latitude: {lat} Longitude: {long}
      </h3>
    </div>
  );
};

export default ShowLocationTitle;
