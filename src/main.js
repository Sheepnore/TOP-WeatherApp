import "./style.css";
import { getData } from "./getWeatherData";
import {getGifsData} from "./getGifsData";
import countryFlagEmoji from "country-flag-emoji";

async function renderPage(){
  const data = await getData();
  const weatherGifs = await getGifsData(data.currentConditions.conditions.split(' ')[1]);
  console.log(data);
  console.log(weatherGifs);
  renderHtml(data, weatherGifs);
}

function renderHtml(data, gifsData){
    const location = document.querySelector('.location');
    const currentConditions = document.querySelector('.currentConditions');
    const today = document.querySelector('.today')
    const gif = document.querySelector('.gif')

    const country = data.address.split(',')[1];
    const countriesList = countryFlagEmoji.data;
  
    const pickOneFromTen = Math.floor(Math.random()*10);
    const imgSrc = gifsData.data[pickOneFromTen].images.original.url;

    // DOM
    location.textContent = data.address + ' ' + countriesList[country].emoji;
    
    currentConditions.textContent = `Current Weather: ${data.currentConditions.conditions}`;
    today.textContent = data.days[0].datetime;
    gif.src = imgSrc;
  
}

document.addEventListener('DOMContentLoaded',()=>{
  renderPage();
})