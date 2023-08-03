import axios from "axios";

// for javascript 3000
// for java 8080
const base_url = "http://localhost:3000/"

// GET
const getApiData = async (route) => {
    const queryUrl = base_url + route;
    try {
        const result = await axios.get(queryUrl);
        return result; 
    } catch (error) {
        console.error(error); 
    }
}
const getAllMetadata = async () => {
    const route = 'getMetadata';
    const result = await getApiData(route);
    const arrayOfRows = result.data.rows; 
    const unfilteredArray = result.data.rows; 
    const filteredArray = unfilteredArray.map((row) => {
        return {timestamp: row.timestamp, assessor: row.assessor, location: row.location}; 
    })
    return filteredArray; 
}
const getTemplateList = async (type) => {
    const route = 'getTemplate/' + type; 
    const result = await getApiData(route);
    const arrayOfRows = result.data.rows;
    const arrayOfServices = arrayOfRows.map((row) => row["service_name"]);   
    return arrayOfServices; 
}
const getFormByTimestamp = async (timestamp) => {
    const route = `formHistory/?timestamp=${timestamp}`;
    const result = await getApiData(route); 
    const unfilteredArray = result.data.rows; 
    const filteredArray = unfilteredArray.map((row) => {
        return {name: row.service_name, serviceType: row.service_type, value: row.value}
    })
    return filteredArray; 
}
// POST
const postToApi = async (route, body) => {
    try {
        const result = await axios.post(route, body);
        return result; 
    } catch (error) {
        console.error(error); 
    }
}
const postNewRow = async (data, timestamp) => {
    const queryUrl = base_url + 'postRow';
    const body = {
        timestamp: timestamp, 
        name: data.name,
        serviceType: data.serviceType,
        value: data.value,
    }
    const result = await postToApi(queryUrl, body)
   return result; 
}
const postNewForm = async (data, metadata) => {
    for (let i = 0; i < data.length; i++) {
        postNewRow(data[i], metadata.timestamp); 
    }
    const queryUrl = base_url + 'postMetadata';
    const body = {
        timestamp: metadata.timestamp, 
        assessor: metadata.assessor,
        location: metadata.location
    }
    const result = await postToApi(queryUrl, body);
    return result; 
}
// DELETE
const removeFormByTimestamp = async (timestamp) => {
    try {
        const result = await axios.post(base_url + 'removeForm', {
            timestamp: timestamp
        });
        return result; 
    } catch (error) {
        console.error(error); 
    }
}
const removeAllForms = async () => {
    try {
        const result = await axios.post(base_url + 'removeAllForms')
        return result;
    } catch (error) {
        console.error(error); 
    }
}


export {getTemplateList,
     getFormByTimestamp,
     postNewForm,
     removeFormByTimestamp,
     getAllMetadata,
    removeAllForms }; 