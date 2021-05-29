import axios from 'axios'

const url = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '61c367dc77c01b3856524bc7119bb7e5';


export const getdata = async (city, country) => {
    return await axios.get(`${url}?q=${city},${country}&appid=${API_KEY}`)
}
