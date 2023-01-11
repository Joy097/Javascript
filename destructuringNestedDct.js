const forecast = {
    today:{max:92, min:88},
    tomorrow:{max:94, min:78}
}

function getMaxTemp(frc){
    const {tomorrow :{ max : maxOfTomo}} = frc;
    return maxOfTomo;
}
console.log(getMaxTemp(forecast))