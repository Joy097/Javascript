async function change_myselect(sel){
    //const dbParam = JSON.stringify({table:sel, limit:20});
    const response = await fetch("http://www.w3school.com/js/json_demo_html_table.php",
    {
        method: 'POST',
        headers:{
            "Content-type": "application/x-www-form-urlencoded"
        },
        body: "x="+dbParam
        
    });

    const myObj = await response.json();
    text = "<table></table>";

}