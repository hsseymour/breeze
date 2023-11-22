const ShowLocationTitle = ({ coordinates }) => {
  const { name, lat, long } = coordinates;
  return (
    <div className="flexCol wrap">
      {name && <h2>{name}</h2>}
      <p>Latitude: {lat}</p>
      <p>Longitude: {long}</p>
    </div>
  );
};

export default ShowLocationTitle;
