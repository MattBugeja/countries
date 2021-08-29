const apiHandler = (() => {
  const saveToLocal = (entry, data) => {
    localStorage.setItem(entry, JSON.stringify(data));
  };

  const callFromLocal = () => {
    const dataRetrieved = localStorage.getItem("data");
    const data = JSON.parse(dataRetrieved);

    return data;
  };

  const getAllCountries = async () => {
    const response = await fetch(`https://restcountries.eu/rest/v2/all`, {
      mode: "cors",
    });

    const data = await response.json();

    return saveToLocal("data", data);
  };

  return { saveToLocal, callFromLocal, getAllCountries };
})();

export { apiHandler };
