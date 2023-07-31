const getApiData = async (route) => {
let response = ""; 
const base_url = "https://localhost:3000/"
const queryUrl = base_url + route;
console.log("queryUrl: " + queryUrl); 

fetch(queryUrl)
.then(res => {
    console.log(res);
    console.log(res.json); 
    return res.json; 
})
.catch(err => {
    console.log(err);
})
}

const getTemplateList = async (type) => {
    data = await getApiData(type);
    console.log(type); 
    return data.services; 
}

export default getTemplateList; 