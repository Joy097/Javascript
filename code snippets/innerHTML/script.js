function addfruit(fruit){
    html+=`<li>${fruit}</li>`;

}

const fruits = ['banana', 'mango', 'tomato', 'orange'];
var length = fruits.length;
html='<ul>';
fruits.forEach(addfruit);
html += '</ul>';

document.getElementById('fruits').innerHTML = html;
