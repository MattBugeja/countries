const apiHandler = (() => {
  const saveToLocalStorage = (entry, data) => {
    localStorage.setItem(entry, JSON.stringify(data));
  };

  const callFromLocalStorage = () => {

    // localStorage.clear()
 const dataRetrieved = localStorage.getItem("data");
    const data = JSON.parse(dataRetrieved);

    return data;
  };

  const getAllCountriesData = async () => {
    const response = await fetch(`https://restcountries.com/v3/all`, {
      mode: "cors",
    });

    const data = await response.json();

    return saveToLocalStorage("data", data);
  };

  return { saveToLocalStorage, callFromLocalStorage, getAllCountriesData };
})();

export { apiHandler };
