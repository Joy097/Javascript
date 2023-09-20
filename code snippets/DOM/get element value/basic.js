const formValues = document.forms["frm1"];
console.dir(formValues);
text = ""
for (let i = 0; i < formValues.length; i++) {
    text += formValues.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;