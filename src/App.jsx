import React, { useEffect, useState } from 'react'

export default function App() {
  const [data, setData] = useState([])
  const [dataDay, setDataDay] = useState([])
  const city = 'barcelona'

  /*  const wather = {
     "coord": {
       "lon": -0.1257,
       "lat": 51.5085
     },
     "weather": [
       {
         "id": 801,
         "main": "Clouds",
         "description": "few clouds",
         "icon": "02d"
       }
     ],
     "base": "stations",
     "main": {
       "temp": 21.43,
       "feels_like": 21.17,
       "temp_min": 19.95,
       "temp_max": 22.3,
       "pressure": 1011,
       "humidity": 59,
       "sea_level": 1011,
       "grnd_level": 1007
     },
     "visibility": 10000,
     "wind": {
       "speed": 4.63,
       "deg": 240
     },
     "clouds": {
       "all": 20
     },
     "dt": 1722018024,
     "sys": {
       "type": 2,
       "id": 2075535,
       "country": "GB",
       "sunrise": 1721967347,
       "sunset": 1722023879
     },
     "timezone": 3600,
     "id": 2643743,
     "name": "London",
     "cod": 200
   } */

  /*  const dias = {
     "cod": "200",
     "message": 0,
     "cnt": 40,
     "list": [
       {
         "dt": 1722124800,
         "main": {
           "temp": 15.53,
           "feels_like": 15.12,
           "temp_min": 15.53,
           "temp_max": 15.9,
           "pressure": 1021,
           "sea_level": 1021,
           "grnd_level": 1017,
           "humidity": 76,
           "temp_kf": -0.37
         },
         "weather": [
           {
             "id": 801,
             "main": "Clouds",
             "description": "few clouds",
             "icon": "02n"
           }
         ],
         "clouds": {
           "all": 19
         },
         "wind": {
           "speed": 1.25,
           "deg": 273,
           "gust": 1.84
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "n"
         },
         "dt_txt": "2024-07-28 00:00:00"
       },
       {
         "dt": 1722135600,
         "main": {
           "temp": 15.24,
           "feels_like": 14.86,
           "temp_min": 14.65,
           "temp_max": 15.24,
           "pressure": 1021,
           "sea_level": 1021,
           "grnd_level": 1018,
           "humidity": 78,
           "temp_kf": 0.59
         },
         "weather": [
           {
             "id": 801,
             "main": "Clouds",
             "description": "few clouds",
             "icon": "02n"
           }
         ],
         "clouds": {
           "all": 13
         },
         "wind": {
           "speed": 0.98,
           "deg": 271,
           "gust": 1.05
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "n"
         },
         "dt_txt": "2024-07-28 03:00:00"
       },
       {
         "dt": 1722146400,
         "main": {
           "temp": 15.48,
           "feels_like": 15.09,
           "temp_min": 15.46,
           "temp_max": 15.48,
           "pressure": 1024,
           "sea_level": 1024,
           "grnd_level": 1020,
           "humidity": 77,
           "temp_kf": 0.02
         },
         "weather": [
           {
             "id": 800,
             "main": "Clear",
             "description": "clear sky",
             "icon": "01d"
           }
         ],
         "clouds": {
           "all": 6
         },
         "wind": {
           "speed": 1.09,
           "deg": 247,
           "gust": 1.54
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-28 06:00:00"
       },
       {
         "dt": 1722157200,
         "main": {
           "temp": 20.65,
           "feels_like": 20.21,
           "temp_min": 20.65,
           "temp_max": 20.65,
           "pressure": 1026,
           "sea_level": 1026,
           "grnd_level": 1021,
           "humidity": 55,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 800,
             "main": "Clear",
             "description": "clear sky",
             "icon": "01d"
           }
         ],
         "clouds": {
           "all": 2
         },
         "wind": {
           "speed": 0.92,
           "deg": 215,
           "gust": 1.29
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-28 09:00:00"
       },
       {
         "dt": 1722168000,
         "main": {
           "temp": 24.91,
           "feels_like": 24.45,
           "temp_min": 24.91,
           "temp_max": 24.91,
           "pressure": 1025,
           "sea_level": 1025,
           "grnd_level": 1021,
           "humidity": 38,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 800,
             "main": "Clear",
             "description": "clear sky",
             "icon": "01d"
           }
         ],
         "clouds": {
           "all": 1
         },
         "wind": {
           "speed": 1.15,
           "deg": 192,
           "gust": 1.78
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-28 12:00:00"
       },
       {
         "dt": 1722178800,
         "main": {
           "temp": 26.31,
           "feels_like": 26.31,
           "temp_min": 26.31,
           "temp_max": 26.31,
           "pressure": 1024,
           "sea_level": 1024,
           "grnd_level": 1020,
           "humidity": 33,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 800,
             "main": "Clear",
             "description": "clear sky",
             "icon": "01d"
           }
         ],
         "clouds": {
           "all": 2
         },
         "wind": {
           "speed": 2.55,
           "deg": 188,
           "gust": 2.47
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-28 15:00:00"
       },
       {
         "dt": 1722189600,
         "main": {
           "temp": 24.38,
           "feels_like": 23.94,
           "temp_min": 24.38,
           "temp_max": 24.38,
           "pressure": 1024,
           "sea_level": 1024,
           "grnd_level": 1019,
           "humidity": 41,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 802,
             "main": "Clouds",
             "description": "scattered clouds",
             "icon": "03d"
           }
         ],
         "clouds": {
           "all": 26
         },
         "wind": {
           "speed": 3.13,
           "deg": 171,
           "gust": 3.16
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-28 18:00:00"
       },
       {
         "dt": 1722200400,
         "main": {
           "temp": 20.32,
           "feels_like": 19.87,
           "temp_min": 20.32,
           "temp_max": 20.32,
           "pressure": 1025,
           "sea_level": 1025,
           "grnd_level": 1020,
           "humidity": 56,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 801,
             "main": "Clouds",
             "description": "few clouds",
             "icon": "02n"
           }
         ],
         "clouds": {
           "all": 14
         },
         "wind": {
           "speed": 1.51,
           "deg": 192,
           "gust": 3.73
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "n"
         },
         "dt_txt": "2024-07-28 21:00:00"
       },
       {
         "dt": 1722211200,
         "main": {
           "temp": 18.1,
           "feels_like": 17.51,
           "temp_min": 18.1,
           "temp_max": 18.1,
           "pressure": 1024,
           "sea_level": 1024,
           "grnd_level": 1020,
           "humidity": 59,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 800,
             "main": "Clear",
             "description": "clear sky",
             "icon": "01n"
           }
         ],
         "clouds": {
           "all": 10
         },
         "wind": {
           "speed": 1.33,
           "deg": 151,
           "gust": 2.39
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "n"
         },
         "dt_txt": "2024-07-29 00:00:00"
       },
       {
         "dt": 1722222000,
         "main": {
           "temp": 16.89,
           "feels_like": 16.25,
           "temp_min": 16.89,
           "temp_max": 16.89,
           "pressure": 1024,
           "sea_level": 1024,
           "grnd_level": 1020,
           "humidity": 62,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 802,
             "main": "Clouds",
             "description": "scattered clouds",
             "icon": "03n"
           }
         ],
         "clouds": {
           "all": 28
         },
         "wind": {
           "speed": 1.36,
           "deg": 96,
           "gust": 2.04
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "n"
         },
         "dt_txt": "2024-07-29 03:00:00"
       },
       {
         "dt": 1722232800,
         "main": {
           "temp": 17.68,
           "feels_like": 17.17,
           "temp_min": 17.68,
           "temp_max": 17.68,
           "pressure": 1024,
           "sea_level": 1024,
           "grnd_level": 1019,
           "humidity": 64,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 801,
             "main": "Clouds",
             "description": "few clouds",
             "icon": "02d"
           }
         ],
         "clouds": {
           "all": 18
         },
         "wind": {
           "speed": 1.63,
           "deg": 107,
           "gust": 3.42
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-29 06:00:00"
       },
       {
         "dt": 1722243600,
         "main": {
           "temp": 22.91,
           "feels_like": 22.56,
           "temp_min": 22.91,
           "temp_max": 22.91,
           "pressure": 1023,
           "sea_level": 1023,
           "grnd_level": 1019,
           "humidity": 50,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 800,
             "main": "Clear",
             "description": "clear sky",
             "icon": "01d"
           }
         ],
         "clouds": {
           "all": 10
         },
         "wind": {
           "speed": 2.04,
           "deg": 123,
           "gust": 3.2
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-29 09:00:00"
       },
       {
         "dt": 1722254400,
         "main": {
           "temp": 26.81,
           "feels_like": 26.46,
           "temp_min": 26.81,
           "temp_max": 26.81,
           "pressure": 1021,
           "sea_level": 1021,
           "grnd_level": 1017,
           "humidity": 34,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 801,
             "main": "Clouds",
             "description": "few clouds",
             "icon": "02d"
           }
         ],
         "clouds": {
           "all": 11
         },
         "wind": {
           "speed": 2.67,
           "deg": 142,
           "gust": 3.37
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-29 12:00:00"
       },
       {
         "dt": 1722265200,
         "main": {
           "temp": 28.15,
           "feels_like": 27.36,
           "temp_min": 28.15,
           "temp_max": 28.15,
           "pressure": 1020,
           "sea_level": 1020,
           "grnd_level": 1016,
           "humidity": 33,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 802,
             "main": "Clouds",
             "description": "scattered clouds",
             "icon": "03d"
           }
         ],
         "clouds": {
           "all": 26
         },
         "wind": {
           "speed": 3.44,
           "deg": 134,
           "gust": 3.33
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-29 15:00:00"
       },
       {
         "dt": 1722276000,
         "main": {
           "temp": 25.65,
           "feels_like": 25.32,
           "temp_min": 25.65,
           "temp_max": 25.65,
           "pressure": 1019,
           "sea_level": 1019,
           "grnd_level": 1015,
           "humidity": 40,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 801,
             "main": "Clouds",
             "description": "few clouds",
             "icon": "02d"
           }
         ],
         "clouds": {
           "all": 14
         },
         "wind": {
           "speed": 3.71,
           "deg": 115,
           "gust": 3.25
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-29 18:00:00"
       },
       {
         "dt": 1722286800,
         "main": {
           "temp": 21.23,
           "feels_like": 20.9,
           "temp_min": 21.23,
           "temp_max": 21.23,
           "pressure": 1020,
           "sea_level": 1020,
           "grnd_level": 1015,
           "humidity": 57,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 802,
             "main": "Clouds",
             "description": "scattered clouds",
             "icon": "03n"
           }
         ],
         "clouds": {
           "all": 28
         },
         "wind": {
           "speed": 2.54,
           "deg": 103,
           "gust": 6.38
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "n"
         },
         "dt_txt": "2024-07-29 21:00:00"
       },
       {
         "dt": 1722297600,
         "main": {
           "temp": 19.69,
           "feels_like": 19.44,
           "temp_min": 19.69,
           "temp_max": 19.69,
           "pressure": 1020,
           "sea_level": 1020,
           "grnd_level": 1015,
           "humidity": 66,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 801,
             "main": "Clouds",
             "description": "few clouds",
             "icon": "02n"
           }
         ],
         "clouds": {
           "all": 17
         },
         "wind": {
           "speed": 1.25,
           "deg": 81,
           "gust": 1.52
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "n"
         },
         "dt_txt": "2024-07-30 00:00:00"
       },
       {
         "dt": 1722308400,
         "main": {
           "temp": 18.24,
           "feels_like": 18,
           "temp_min": 18.24,
           "temp_max": 18.24,
           "pressure": 1019,
           "sea_level": 1019,
           "grnd_level": 1014,
           "humidity": 72,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 800,
             "main": "Clear",
             "description": "clear sky",
             "icon": "01n"
           }
         ],
         "clouds": {
           "all": 0
         },
         "wind": {
           "speed": 1.56,
           "deg": 65,
           "gust": 2.03
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "n"
         },
         "dt_txt": "2024-07-30 03:00:00"
       },
       {
         "dt": 1722319200,
         "main": {
           "temp": 18.92,
           "feels_like": 18.67,
           "temp_min": 18.92,
           "temp_max": 18.92,
           "pressure": 1018,
           "sea_level": 1018,
           "grnd_level": 1014,
           "humidity": 69,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 800,
             "main": "Clear",
             "description": "clear sky",
             "icon": "01d"
           }
         ],
         "clouds": {
           "all": 0
         },
         "wind": {
           "speed": 1.66,
           "deg": 64,
           "gust": 3.27
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-30 06:00:00"
       },
       {
         "dt": 1722330000,
         "main": {
           "temp": 24.47,
           "feels_like": 24.23,
           "temp_min": 24.47,
           "temp_max": 24.47,
           "pressure": 1018,
           "sea_level": 1018,
           "grnd_level": 1014,
           "humidity": 48,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 800,
             "main": "Clear",
             "description": "clear sky",
             "icon": "01d"
           }
         ],
         "clouds": {
           "all": 6
         },
         "wind": {
           "speed": 2.07,
           "deg": 75,
           "gust": 2.89
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-30 09:00:00"
       },
       {
         "dt": 1722340800,
         "main": {
           "temp": 28.66,
           "feels_like": 27.97,
           "temp_min": 28.66,
           "temp_max": 28.66,
           "pressure": 1017,
           "sea_level": 1017,
           "grnd_level": 1012,
           "humidity": 36,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 800,
             "main": "Clear",
             "description": "clear sky",
             "icon": "01d"
           }
         ],
         "clouds": {
           "all": 5
         },
         "wind": {
           "speed": 2.25,
           "deg": 105,
           "gust": 2.05
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-30 12:00:00"
       },
       {
         "dt": 1722351600,
         "main": {
           "temp": 30.6,
           "feels_like": 29.6,
           "temp_min": 30.6,
           "temp_max": 30.6,
           "pressure": 1016,
           "sea_level": 1016,
           "grnd_level": 1011,
           "humidity": 33,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 801,
             "main": "Clouds",
             "description": "few clouds",
             "icon": "02d"
           }
         ],
         "clouds": {
           "all": 24
         },
         "wind": {
           "speed": 1.75,
           "deg": 115,
           "gust": 2.84
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-30 15:00:00"
       },
       {
         "dt": 1722362400,
         "main": {
           "temp": 26.58,
           "feels_like": 26.58,
           "temp_min": 26.58,
           "temp_max": 26.58,
           "pressure": 1015,
           "sea_level": 1015,
           "grnd_level": 1011,
           "humidity": 45,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 803,
             "main": "Clouds",
             "description": "broken clouds",
             "icon": "04d"
           }
         ],
         "clouds": {
           "all": 61
         },
         "wind": {
           "speed": 4.71,
           "deg": 114,
           "gust": 5.39
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-30 18:00:00"
       },
       {
         "dt": 1722373200,
         "main": {
           "temp": 22.97,
           "feels_like": 22.68,
           "temp_min": 22.97,
           "temp_max": 22.97,
           "pressure": 1015,
           "sea_level": 1015,
           "grnd_level": 1011,
           "humidity": 52,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 804,
             "main": "Clouds",
             "description": "overcast clouds",
             "icon": "04n"
           }
         ],
         "clouds": {
           "all": 100
         },
         "wind": {
           "speed": 2.53,
           "deg": 92,
           "gust": 5.58
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "n"
         },
         "dt_txt": "2024-07-30 21:00:00"
       },
       {
         "dt": 1722384000,
         "main": {
           "temp": 21.72,
           "feels_like": 21.44,
           "temp_min": 21.72,
           "temp_max": 21.72,
           "pressure": 1015,
           "sea_level": 1015,
           "grnd_level": 1011,
           "humidity": 57,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 804,
             "main": "Clouds",
             "description": "overcast clouds",
             "icon": "04n"
           }
         ],
         "clouds": {
           "all": 100
         },
         "wind": {
           "speed": 2.21,
           "deg": 73,
           "gust": 3.98
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "n"
         },
         "dt_txt": "2024-07-31 00:00:00"
       },
       {
         "dt": 1722394800,
         "main": {
           "temp": 20.16,
           "feels_like": 19.9,
           "temp_min": 20.16,
           "temp_max": 20.16,
           "pressure": 1014,
           "sea_level": 1014,
           "grnd_level": 1010,
           "humidity": 64,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 804,
             "main": "Clouds",
             "description": "overcast clouds",
             "icon": "04n"
           }
         ],
         "clouds": {
           "all": 94
         },
         "wind": {
           "speed": 2.03,
           "deg": 66,
           "gust": 6.09
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "n"
         },
         "dt_txt": "2024-07-31 03:00:00"
       },
       {
         "dt": 1722405600,
         "main": {
           "temp": 20.42,
           "feels_like": 20.08,
           "temp_min": 20.42,
           "temp_max": 20.42,
           "pressure": 1014,
           "sea_level": 1014,
           "grnd_level": 1010,
           "humidity": 60,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 804,
             "main": "Clouds",
             "description": "overcast clouds",
             "icon": "04d"
           }
         ],
         "clouds": {
           "all": 97
         },
         "wind": {
           "speed": 1.96,
           "deg": 60,
           "gust": 4.49
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-31 06:00:00"
       },
       {
         "dt": 1722416400,
         "main": {
           "temp": 23.28,
           "feels_like": 23,
           "temp_min": 23.28,
           "temp_max": 23.28,
           "pressure": 1014,
           "sea_level": 1014,
           "grnd_level": 1010,
           "humidity": 51,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 804,
             "main": "Clouds",
             "description": "overcast clouds",
             "icon": "04d"
           }
         ],
         "clouds": {
           "all": 100
         },
         "wind": {
           "speed": 2.8,
           "deg": 70,
           "gust": 4.43
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-31 09:00:00"
       },
       {
         "dt": 1722427200,
         "main": {
           "temp": 24.05,
           "feels_like": 23.97,
           "temp_min": 24.05,
           "temp_max": 24.05,
           "pressure": 1014,
           "sea_level": 1014,
           "grnd_level": 1010,
           "humidity": 56,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 500,
             "main": "Rain",
             "description": "light rain",
             "icon": "10d"
           }
         ],
         "clouds": {
           "all": 99
         },
         "wind": {
           "speed": 3.28,
           "deg": 85,
           "gust": 4.86
         },
         "visibility": 10000,
         "pop": 0.2,
         "rain": {
           "3h": 0.24
         },
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-31 12:00:00"
       },
       {
         "dt": 1722438000,
         "main": {
           "temp": 23.77,
           "feels_like": 23.74,
           "temp_min": 23.77,
           "temp_max": 23.77,
           "pressure": 1014,
           "sea_level": 1014,
           "grnd_level": 1009,
           "humidity": 59,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 500,
             "main": "Rain",
             "description": "light rain",
             "icon": "10d"
           }
         ],
         "clouds": {
           "all": 98
         },
         "wind": {
           "speed": 3.56,
           "deg": 75,
           "gust": 5.22
         },
         "visibility": 10000,
         "pop": 0.36,
         "rain": {
           "3h": 0.15
         },
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-31 15:00:00"
       },
       {
         "dt": 1722448800,
         "main": {
           "temp": 24.54,
           "feels_like": 24.54,
           "temp_min": 24.54,
           "temp_max": 24.54,
           "pressure": 1013,
           "sea_level": 1013,
           "grnd_level": 1009,
           "humidity": 57,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 500,
             "main": "Rain",
             "description": "light rain",
             "icon": "10d"
           }
         ],
         "clouds": {
           "all": 54
         },
         "wind": {
           "speed": 3.35,
           "deg": 79,
           "gust": 4.12
         },
         "visibility": 10000,
         "pop": 0.31,
         "rain": {
           "3h": 0.12
         },
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-07-31 18:00:00"
       },
       {
         "dt": 1722459600,
         "main": {
           "temp": 21.37,
           "feels_like": 21.42,
           "temp_min": 21.37,
           "temp_max": 21.37,
           "pressure": 1013,
           "sea_level": 1013,
           "grnd_level": 1009,
           "humidity": 71,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 802,
             "main": "Clouds",
             "description": "scattered clouds",
             "icon": "03n"
           }
         ],
         "clouds": {
           "all": 30
         },
         "wind": {
           "speed": 2.31,
           "deg": 74,
           "gust": 5.93
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "n"
         },
         "dt_txt": "2024-07-31 21:00:00"
       },
       {
         "dt": 1722470400,
         "main": {
           "temp": 19.74,
           "feels_like": 19.81,
           "temp_min": 19.74,
           "temp_max": 19.74,
           "pressure": 1013,
           "sea_level": 1013,
           "grnd_level": 1008,
           "humidity": 78,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 500,
             "main": "Rain",
             "description": "light rain",
             "icon": "10n"
           }
         ],
         "clouds": {
           "all": 49
         },
         "wind": {
           "speed": 1.69,
           "deg": 65,
           "gust": 5.4
         },
         "visibility": 10000,
         "pop": 0.2,
         "rain": {
           "3h": 0.15
         },
         "sys": {
           "pod": "n"
         },
         "dt_txt": "2024-08-01 00:00:00"
       },
       {
         "dt": 1722481200,
         "main": {
           "temp": 18.6,
           "feels_like": 18.66,
           "temp_min": 18.6,
           "temp_max": 18.6,
           "pressure": 1011,
           "sea_level": 1011,
           "grnd_level": 1007,
           "humidity": 82,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 500,
             "main": "Rain",
             "description": "light rain",
             "icon": "10n"
           }
         ],
         "clouds": {
           "all": 45
         },
         "wind": {
           "speed": 1.87,
           "deg": 42,
           "gust": 5.31
         },
         "visibility": 10000,
         "pop": 0.24,
         "rain": {
           "3h": 0.11
         },
         "sys": {
           "pod": "n"
         },
         "dt_txt": "2024-08-01 03:00:00"
       },
       {
         "dt": 1722492000,
         "main": {
           "temp": 18.51,
           "feels_like": 18.69,
           "temp_min": 18.51,
           "temp_max": 18.51,
           "pressure": 1011,
           "sea_level": 1011,
           "grnd_level": 1007,
           "humidity": 87,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 500,
             "main": "Rain",
             "description": "light rain",
             "icon": "10d"
           }
         ],
         "clouds": {
           "all": 66
         },
         "wind": {
           "speed": 1.92,
           "deg": 32,
           "gust": 3.46
         },
         "visibility": 10000,
         "pop": 1,
         "rain": {
           "3h": 1.17
         },
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-08-01 06:00:00"
       },
       {
         "dt": 1722502800,
         "main": {
           "temp": 20.83,
           "feels_like": 21.19,
           "temp_min": 20.83,
           "temp_max": 20.83,
           "pressure": 1010,
           "sea_level": 1010,
           "grnd_level": 1006,
           "humidity": 85,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 501,
             "main": "Rain",
             "description": "moderate rain",
             "icon": "10d"
           }
         ],
         "clouds": {
           "all": 98
         },
         "wind": {
           "speed": 1.59,
           "deg": 359,
           "gust": 1.81
         },
         "visibility": 6713,
         "pop": 1,
         "rain": {
           "3h": 3.22
         },
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-08-01 09:00:00"
       },
       {
         "dt": 1722513600,
         "main": {
           "temp": 22.52,
           "feels_like": 22.84,
           "temp_min": 22.52,
           "temp_max": 22.52,
           "pressure": 1010,
           "sea_level": 1010,
           "grnd_level": 1006,
           "humidity": 77,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 500,
             "main": "Rain",
             "description": "light rain",
             "icon": "10d"
           }
         ],
         "clouds": {
           "all": 100
         },
         "wind": {
           "speed": 1.22,
           "deg": 45,
           "gust": 0.93
         },
         "visibility": 10000,
         "pop": 1,
         "rain": {
           "3h": 0.86
         },
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-08-01 12:00:00"
       },
       {
         "dt": 1722524400,
         "main": {
           "temp": 25.17,
           "feels_like": 25.39,
           "temp_min": 25.17,
           "temp_max": 25.17,
           "pressure": 1009,
           "sea_level": 1009,
           "grnd_level": 1005,
           "humidity": 63,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 500,
             "main": "Rain",
             "description": "light rain",
             "icon": "10d"
           }
         ],
         "clouds": {
           "all": 100
         },
         "wind": {
           "speed": 1.54,
           "deg": 295,
           "gust": 3.03
         },
         "visibility": 10000,
         "pop": 0.31,
         "rain": {
           "3h": 0.12
         },
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-08-01 15:00:00"
       },
       {
         "dt": 1722535200,
         "main": {
           "temp": 24.53,
           "feels_like": 24.63,
           "temp_min": 24.53,
           "temp_max": 24.53,
           "pressure": 1009,
           "sea_level": 1009,
           "grnd_level": 1005,
           "humidity": 61,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 500,
             "main": "Rain",
             "description": "light rain",
             "icon": "10d"
           }
         ],
         "clouds": {
           "all": 100
         },
         "wind": {
           "speed": 3.08,
           "deg": 295,
           "gust": 4.33
         },
         "visibility": 10000,
         "pop": 0.39,
         "rain": {
           "3h": 0.12
         },
         "sys": {
           "pod": "d"
         },
         "dt_txt": "2024-08-01 18:00:00"
       },
       {
         "dt": 1722546000,
         "main": {
           "temp": 20.16,
           "feels_like": 20.37,
           "temp_min": 20.16,
           "temp_max": 20.16,
           "pressure": 1011,
           "sea_level": 1011,
           "grnd_level": 1006,
           "humidity": 82,
           "temp_kf": 0
         },
         "weather": [
           {
             "id": 804,
             "main": "Clouds",
             "description": "overcast clouds",
             "icon": "04n"
           }
         ],
         "clouds": {
           "all": 99
         },
         "wind": {
           "speed": 2.98,
           "deg": 340,
           "gust": 5.24
         },
         "visibility": 10000,
         "pop": 0,
         "sys": {
           "pod": "n"
         },
         "dt_txt": "2024-08-01 21:00:00"
       }
     ],
     "city": {
       "id": 2643743,
       "name": "London",
       "coord": {
         "lat": 51.5085,
         "lon": -0.1257
       },
       "country": "GB",
       "population": 1000000,
       "timezone": 3600,
       "sunrise": 1722053834,
       "sunset": 1722110193
     }
   } */


  const getDatatwo = async () => {
    const rsday = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b792af4110fe18dddb3b844b5ebeafd&units=metric`)
    const resultday = await rsday.json()
   
    setDataDay(resultday)
  }

  const getData = async () => {
    /* const rsday = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0b792af4110fe18dddb3b844b5ebeafd&units=metric`)
    const resultday = await rsday.json()

    setDataDay(resultday) */

    const rs = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=0b792af4110fe18dddb3b844b5ebeafd&units=metric`)
    const result = await rs.json()
    // setData(wather);


    const daysFive = result.list.filter(obj => obj.dt_txt.includes("12:00:00"))

    const newFiveDays = daysFive.map((day, i) => {
      if (i === 0) {
        return {
          ...day,
          dt: 'Tomorrow'
        }
      }

      return day
    })


    setData(newFiveDays)

  }

  useEffect(() => {
    getDatatwo()
    getData()
  }, [])
 


  //  const date = 
  var options = {
    weekday: "short",
    month: "short",
    day: "numeric",
  }


  const wind = (grados) => {
    if (grados > 0 & grados < 22.5) {
      return 'N'
    }
    if (grados >= 22.5 & grados < 45) {
      return 'NNE'
    }
    if (grados >= 45 & grados < 67.5) {
      return 'NE'
    }
    if (grados >= 67.5 & grados < 90) {
      return 'ENE'
    }
    if (grados >= 90 & grados < 112.5) {
      return 'E'
    }
    if (grados >= 112.5 & grados < 135) {
      return 'ESE'
    }
    if (grados >= 135 & grados < 157.5) {
      return 'SE'
    }
    if (grados > 157.5 & grados < 180) {
      return 'SSE'
    }
    if (grados > 180 & grados < 202.5) {
      return 'S'
    }
    if (grados >= 202.5 & grados < 225) {
      return 'SSW'
    }
    if (grados >= 225 & grados < 247.5) {
      return 'SW'
    }
    if (grados >= 247.5 & grados < 270) {
      return 'WSW'
    }
    if (grados >= 270 & grados < 292.5) {
      return 'W'
    }
    if (grados >= 292.5 & grados < 315) {
      return 'WNW'
    }
    if (grados >= 315 & grados < 337.5) {
      return 'NW'
    }
    if (grados >= 337.5 & grados < 360) {
      return 'NHW'
    }


  }

  console.log(data);
  console.log(dataDay);

  return (
    <div>
      {/* {dataDay && 
         <span>{dataDay.main.temp}°C</span>} */}
      <div className="flex flex-col gap-[1rem]  bg-slate-300 m-auto p-[2rem]">
        {
        (dataDay != '') && 
        <>
          <span>{dataDay.main.temp}°C</span>
        <span>{dataDay.weather[0].icon}</span>
        <span>{dataDay.weather[0].description}</span>
        <img src={`/images/${dataDay.weather[0].icon}.png`} alt="icon" width={50} />
        <span>Today - {new Date((dataDay.dt) * 1000).toLocaleString('en-GB', options)}</span>
        <span>{dataDay.name}</span>
        </>
        }
      </div>
      <div className="flex flex-col gap-[1rem] text-white  bg-cyan-800 m-auto p-[2rem]">

        {data &&
          data.map((day => (
            <div className="flex flex-col" key={day.dt}>
              <h1>{(day.dt === 'Tomorrow') ? 'Tomorrow' : new Date(day.dt * 1000).toLocaleString('en-GB', options)}</h1>
              <span>Imagen-°C {day.weather[0].icon}</span>
              <span>Imagen-°C {day.weather[0].description}</span>
              <img src={`/images/${day.weather[0].icon}.png`} alt="icon" width={50} />
              <span>{day.main.temp_max}</span>
              <span>{day.main.temp_min}</span>
            </div>
          )))
        }
      </div>
      <div className="flex flex-col gap-[1rem]  bg-red-300 m-auto p-[2rem]">
       { (dataDay != '') && 
       <>
        <span>{dataDay.wind.speed}mph--{wind(dataDay.wind.deg)}</span>
        <img src={'/images/nav.svg'} alt="nav" width={20} style={{ rotate: `${(dataDay.wind.deg)}deg` }} />
        <span>{dataDay.main.humidity}%</span>
        <span>{((dataDay.visibility) === 10000) ? (dataDay.visibility / 1000) : (dataDay.visibility).toLocaleString().slice(0, 3)} miles</span>
        <span>{dataDay.main.pressure} mb</span>
        </>}
      </div>
    </div>
  )
}


