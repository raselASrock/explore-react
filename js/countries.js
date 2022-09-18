console.log("countries added");
const loadCountries = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries => {
    console.log(countries[0]);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
    // console.log(countriesHTML);
}
const getCountryHTML = country =>{
    return `
    <div class='country'>
        <img src="${country.flags.png}">
        <h2> ${country.name} </h2>
    </div>
    `
}
loadCountries()