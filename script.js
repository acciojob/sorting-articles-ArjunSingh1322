let ul = document.getElementById("bands");  // Fixed ID

const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled',
    'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper',
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

// Sorting while ignoring "The", "A", and "An"
function stripArticle(name) {
    return name.replace(/^(The |A |An )/, '').trim();
}

bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

bands.forEach((band) => {
    let li = document.createElement("li");
    li.textContent = band;
    ul.appendChild(li);
});

console.log(bands);
