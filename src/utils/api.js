import axios from "axios";

// for javascript 3000
// for java 8080
const base_url = "http://localhost:3000/"

const getApiData = async (route) => {
    const queryUrl = base_url + route;
    console.log(queryUrl); 
    try {
        const result = await axios.get(queryUrl);
        return result; 
    } catch (error) {
        console.error(error); 
    }
}
const getAllTimestamps = async () => {
    const route = 'getTimestamps';
    const result = await getApiData(route);
    const arrayOfRows = result.data.rows;
    const arrayOfTimestamps = arrayOfRows.map((row) => row.timestamp);   
    return arrayOfTimestamps; 
}
const getTemplateList = async (type) => {
    const route = 'getTemplate/' + type; 
    const result = await getApiData(route);
    const arrayOfRows = result.data.rows;
    const arrayOfServices = arrayOfRows.map((row) => row["service_name"]);   
    return arrayOfServices; 
}
const getFormByTimestamp = async (timestamp) => {
    const result = await getApiData(`formHistory/?timestamp=${timestamp}`); 
    const unfilteredArray = result.data.rows; 
    const filteredArray = unfilteredArray.map((row) => {
        return {name: row.service_name, serviceType: row.service_type, value: row.value}
    })
    return filteredArray; 
}
const postNewRow = async (data, timestamp) => {
    const queryUrl = base_url + 'postRow';
    try {
        const result = await axios.post(queryUrl, {
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
const postNewForm = async (data) => {
    const timestamp = data[0];
    for (let i = 1; i < data.length; i++) {
        postNewRow(data[i], timestamp)
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


export {getTemplateList,
     getFormByTimestamp,
     postNewForm,
     removeForm,
     getAllTimestamps}; 