let ul = document.getElementById("list");  

const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled',
    'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

bands.sort((a, b) => a.localeCompare(b));

bands.forEach((band) => {
    let li = document.createElement("li");
    li.textContent = band;  
    ul.appendChild(li);
});

console.log(bands);
