export async function getWeatherData(city){
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=B35GQNLG27E5J37ZMHPAK7A4Y&contentType=json`);

  if (response.ok){
    const data = await response.json();
    return data;
  }
}