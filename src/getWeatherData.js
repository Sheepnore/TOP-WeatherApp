const ApiKey = 'B35GQNLG27E5J37ZMHPAK7A4Y';

export async function getData(){
  const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Taipei%2CTW?unitGroup=metric&include=current%2Cdays&key=${ApiKey}&contentType=json`);

  if (response.ok){
    const data = await response.json();
    return data;
  }
}