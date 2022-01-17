window.addEventListener("DOMContentLoaded",(event) => {
    getVisitCount();
})
const functionApiUrl = "https://getresumecounter002.azurewebsites.net/api/GetResumeCounter?code=f75OwbU0kDOmuTr/AljjnWk19Uwd1TVG1zvJXK4Sbpn12q0JwYjELQ==";
const localFunctionApi ='http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 10;
    fetch(functionApiUrl).then(response => {
        return response.json()
    }).then(response => {
        console.log("Website called function API");
        count = response.count;
        document.getElementById("counter").innerHTML = count;
    }).catch(function(error) {
        console.log(error);
    });
    return count;
}