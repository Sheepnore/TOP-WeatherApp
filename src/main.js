import "./style.css";
import { getWeatherData } from "./getWeatherData";
import {getGifsData} from "./getGifsData";
import { capitalizeFistChar } from "./string"

const searchButton = document.querySelector('.search');
const cityInput = document.querySelector('#cityInput');

searchButton.addEventListener('click',()=>{
  const city = capitalizeFistChar(cityInput.value);

  renderPage(city);
})

async function renderPage(city){
  const data = await getWeatherData(city);
  const weatherGifs = await getGifsData(data.days[1].conditions.split(' ')[1]);
  console.log(data);
  console.log(weatherGifs);
  renderHtml(data, weatherGifs);
}

function renderHtml(data, gifsData){
    const location = document.querySelector('.location');
    const currentConditions = document.querySelector('.currentConditions');
    const today = document.querySelector('.today')
    const gif = document.querySelector('.gif')
  
    const pickOneFromTen = Math.floor(Math.random()*10);
    const imgSrc = gifsData.data[pickOneFromTen].images.original.url;

    // DOM
    location.textContent = data.address;
    
    currentConditions.textContent = `Current Weather: ${data.days[1].conditions}`;
    console.log(data);
    today.textContent = data.days[1].datetime;
    gif.src = imgSrc;
  
}

