export async function getGifsData(weather){
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=HKUJBQWHPUaVAASu1blb3e9QkkfxGuaI&q=${weather}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);
  
  console.log(response);
  if (response.ok){
    const data = await response.json();
    return data;
  }
}