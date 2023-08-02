import axios from "axios";

// for javascript 3000
// for java 8080
const base_url = "http://localhost:3000/"

const getApiData = async (route) => {
    const queryUrl = base_url + route;
    try {
        const result = await axios.get(base_url + route);
        return result; 
    } catch (error) {
        console.error(error); 
    }
}
const postNewRow = async (route, data, timestamp) => {
    const queryUrl = base_url + route;
    try {
        const result = await axios.post(base_url + route, {
            timestamp: timestamp, 
            name: data.name,
            serviceType: data.serviceType,
            value: data.value
        });
        return result; 
    } catch (error) {
        console.error(error); 
    }
}

const getTemplateList = async (type) => {
    const result = await getApiData(type);
    const arrayOfObjects = result.data.rows;
    const arrayOfRows = arrayOfObjects.map((row) => row["service_name"]);   
    return arrayOfRows; 
}
const getFormByTimestamp = async (timestamp) => {
    const result = await getApiData(`formHistory/?timestamp=${timestamp}`); 
    const unfilteredArray = result.data.rows; 
    const filteredArray = unfilteredArray.map((row) => {
        return {name: row.service_name, serviceType: row.service_type, value: row.value}
    })
    return filteredArray; 
}
const postNewForm = async (data) => {
    const timestamp = data[0];
    for (let i = 1; i < data.length; i++) {
        postNewRow('postRow', data[i], timestamp)
    }
}
const removeForm = async (timestamp) => {
    try {
        const result = await axios.post(base_url + 'removeForm', {
            timestamp: timestamp
        });
        return result; 
    } catch (error) {
        console.error(error); 
    }
}

export {getTemplateList, getFormByTimestamp, postNewForm, removeForm}; 