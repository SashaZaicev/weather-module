export type CityType = {
  base: string,
  clouds: cloudsType
  cod: number
  coord: coordType
  dt: number
  id: number
  main: mainType
  name: string
  sys: sysType
  timezone: number
  visibility: number
  weather: Array<weatherType>
  wind: windType
}

interface weatherType {
  id: number,
  main: string,
  description: string,
  icon: string
}

interface sysType {
  type: number,
  id: number,
  country: string,
  sunrise: number,
  sunset: number
}

interface windType {
  speed: number,
  deg: number,
  gust: number
}

interface mainType {
  feels_like: number,
  grnd_level: number,
  humidity: number,
  pressure: number,
  sea_level: number,
  temp: number,
  temp_max: number,
  temp_min: number
}

interface coordType {
  lon: number,
  lat: number
}

interface cloudsType {
  all: number
}

export type OneCity = {
  description: string
  icon: string
  id: number
  main: string
}
// base: "stations"
// clouds: {all: 11}
// cod: 200
// coord: {lon: 73.1021, lat: 49.8019}
// dt: 1627829312
// id: 609655
// main: {temp: 25.97, feels_like: 25.97, temp_min: 25.97, temp_max: 25.97, pressure: 1010, …}
// name: "Karaganda"
// sys: {type: 1, id: 8827, country: "KZ", sunrise: 1627774645, sunset: 1627829418}
// timezone: 21600
// visibility: 10000
// weather: [{…}]
// wind: {speed: 3.36, deg: 358, gust: 4.43}

