const api = ({ ROOT_URL, VARIABLES, template }) => {
  const interpolate = (templateString, params) => {
    return templateString.replace(/\{\{(.*?)\}\}/g, (match, propName) => {
      return params[propName] || "";
    });
  };

  const sendFetchRequest = async ({ args }) => {
    const values = interpolate(template, args);
    const url = `${ROOT_URL}${values}&${VARIABLES}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Fetch response was not okay");
      }
      return response.json();
    } catch (error) {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    }
  };
  return sendFetchRequest;
};

export default api;
