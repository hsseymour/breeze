import { Label, Input, Button } from "../common";

const LocationCoordinateForm = ({ setCoordinates }) => {
  const handleCoordinateFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    setCoordinates({
      lat: formData.get("setLatitude"),
      long: formData.get("setLongitude"),
    });
  };

  return (
    <form
      className="locationInputsForm flexCol"
      onSubmit={handleCoordinateFormSubmit}
    >
      <Label>
        Enter Latitude:
        <Input type="text" name="setLatitude" placeholder="Latitude..." />
      </Label>
      <Label>
        Enter Longitude:
        <Input type="text" name="setLongitude" placeholder="Longitude..." />
      </Label>
      <Button type="submit">Search</Button>
    </form>
  );
};

export default LocationCoordinateForm;
