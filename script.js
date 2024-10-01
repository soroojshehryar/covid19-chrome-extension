async function fetchData() {
    const endpoint = (
    'https://api.coronavirus.data.gov.uk/v1/data?' +
    'filters=areaType=nation;areaName=england&' +
    'structure={"date":"date","areaName":"areaName","areaCode":"areaCode","newCasesByPublishDate": "newCasesByPublishDate","cumCasesByPublishDate": "cumCasesByPublishDate","newDeaths28DaysByPublishDate": "newDeaths28DaysByPublishDate","cumDeaths28DaysByPublishDate": "cumDeaths28DaysByPublishDate"}'
    );
    const res=await fetch (endpoint);
    const record=await res.json();
    document.getElementById("date").innerHTML=record.data[0].date;
    document.getElementById("areaName").innerHTML=record.data[0].areaName;
    document.getElementById("areaCode").innerHTML=record.data[0].areaCode;
    document.getElementById("cumDeaths28DaysByPublishDate").innerHTML=record.data[0].cumDeaths28DaysByPublishDate;
}
fetchData();