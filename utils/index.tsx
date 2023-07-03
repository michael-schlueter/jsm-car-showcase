export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "98192601bemsh8ec93f1b58d55fdp1d7707jsn02b29f3a154b",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  //   Set the required headers for the API request
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  );

  //   Parse the response as JSON
  const result = await response.json();

  return result;
}
