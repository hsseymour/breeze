const getDayOfWeek = (date) => {
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return dayOfWeek[new Date(date).getDay()];
};

export default getDayOfWeek;
