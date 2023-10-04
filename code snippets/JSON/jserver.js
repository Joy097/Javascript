//how to fetch data from server
async function fetchData(){
    const response = await fetch("json.txt");
    const data = await response.json();
    console.log(data);
}

fetchData()