const getUserLocation = (callback) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(callback, callback);
  } else {
  }
};

export default getUserLocation;
