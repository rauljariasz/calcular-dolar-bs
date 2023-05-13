import { useState, useEffect } from "react"

export function usePrecios() {
  const [data, setData] = useState({
    date: '',
    BCV: 0,
    DT: 0,
  })

  useEffect(() => {
    fetch(`https://s3.amazonaws.com/dolartoday/data.json`)
      .then(res => res.json())
      .then(json => {
        setData({
          date: json._timestamp.fecha_nice,
          BCV: json.USD.sicad2,
          DT: json.USD.promedio
        })
      })
  }, [])

  return ({
    date: data.date,
    BCV: data.BCV,
    DT: data.DT
  })
}