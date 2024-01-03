const getDataInfo = (resultData, resulUnits, fields, useIndex = false) => {
  const getFieldInfo = (field) => {
    switch (field) {
      case "temperature_2m":
        return { name: "Temprature" };
      case "apparent_temperature":
        return { name: "Feels Like" };
      case "relative_humidity_2m":
        return { name: "Humidity" };
      case "precipitation":
        return { name: "Precipitation" };
      case "wind_speed_10m":
        return { name: "Wind Speed" };
      case "wind_direction_10m":
        return { name: "Wind Direction" };

      case "precipitation_probability_max":
      case "precipitation_probability":
        return { name: "Precipitation Chance" };
      case "temperature_2m_max":
        return { name: "Max Temp" };
      case "temperature_2m_min":
        return { name: "Min Temp" };
      case "wind_speed_10m_max":
        return { name: "Max Wind Speed" };
      case "wind_direction_10m_dominant":
        return { name: "Wind Direction" };

      default:
        return { name: field };
    }
  };

  return fields.map((field) => {
    const info = getFieldInfo(field);
    return {
      name: info.name,
      data:
        useIndex !== false ? resultData[field][useIndex] : resultData[field],
      units: resulUnits[field],
    };
  });
};

export default getDataInfo;
