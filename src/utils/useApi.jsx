import React, { useEffect, useState } from "react"; 

const base_url = "https://localhost:3000/"

function useApi (service) {
    // set up data and error consts 
    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    const queryUrl = base_url + service

    // do api query every time service changes
    useEffect(() => {
        console.log(service); 
        fetch(queryUrl)
        .then(res => {
            console.log(res.json);
            return res.json
        })
        .then(newData => {
        setData(newData)
    })
    .catch(err => {
        setError(err)
    })  
    }, [service])

    // return the api response
    return { data, error }
}

export default useApi; 
