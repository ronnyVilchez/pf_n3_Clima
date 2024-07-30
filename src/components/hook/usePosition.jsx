import React, { useEffect, useState } from 'react'

export const usePosition = () => {
    const [results, setResults] = useState('')
    //   const [latitude, setLatitude] = useState('')
    //   const [longitude, setLongitude] = useState('')

    useEffect(() => {


        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            // setLatitude(latitude)
            // setLongitude(longitude)
            if (latitude && longitude) {
                async function fetchData() {
                    const rsPs = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=0b792af4110fe18dddb3b844b5ebeafd&units=metric`)

                    const resultPosition = await rsPs.json()
                    console.log(resultPosition.name.toLowerCase());
                    setResults(resultPosition.name.toLowerCase());
                }
                fetchData()
            }
        })




    }, [])

    return {
        results
    }
}
