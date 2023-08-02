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

const getTemplateList = async (type) => {
    const result = await getApiData(type);
    const arrayOfObjects = result.data.rows;
    const arrayOfRows = arrayOfObjects.map((row) => row["service_name"]);   
    return arrayOfRows; 
}

export default getTemplateList; 