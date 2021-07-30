import axios from "axios";

const instance = axios.create({
  // withCredentials: true,
  baseURL: 'https://api.openweathermap.org/data/2.5/'
})
const API_KEY= "43d1cdf9188d6ec1a3cbed6392cda93c"
export const weatherAPI = {
  getWeather(currentCity:any){
    return instance.get(`weather?q=${currentCity}&appid=${API_KEY}&units=metric`)
      .then((res) => {
        return (res.data)
      })
  }
}
