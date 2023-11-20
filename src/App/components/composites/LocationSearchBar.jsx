import { useEffect, useState } from "react";

import { geocoding } from "../../api";
import { Label, Input, SearchResult } from "../common";

const LocationSearchBar = ({ setCoordinates }) => {
  const [location, setLocation] = useState("");
  const [searchResults, setSearchResults] = useState(null);

  useEffect(() => {
    geocoding({ args: { name: location } }).then((data) => {
      if (data.results) {
        setSearchResults(data.results);
      }
    });
  }, [location]);

  const searchResultSelected = (result) => {
    setCoordinates({
      name: `${result.name} [${result.admin1}]`,
      lat: result.latitude,
      long: result.longitude,
    });
    setSearchResults(null);
  };

  return (
    <Label>
      Enter Location:
      <Input
        type="text"
        name="setLocation"
        placeholder="Search..."
        onChange={(e) => setLocation(e.target.value)}
      />
      {searchResults && (
        <ul>
          {searchResults.map((result) => (
            <SearchResult
              key={result.id}
              onClick={() => searchResultSelected(result)}
            >
              {result.name} [{result.admin1}]
            </SearchResult>
          ))}
        </ul>
      )}
    </Label>
  );
};

export default LocationSearchBar;
