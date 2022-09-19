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
const getCountryHTML = ({name, flags,area,region}) =>{
    // Original
    return `
    <div class='country'>
        <img src="${flags.png}">
        <h2> ${name} </h2>
        <P>Country Area: ${area}</P>
        <p>Continent: ${region}</p>
    </div>
    `
}
// const getCountryHTML = country =>{
//     // Original
//     return `
//     <div class='country'>
//         <img src="${country.flags.png}">
//         <h2> ${country.name} </h2>
//     </div>
//     `
// }

// const getCountryHTML = country =>{
//     // Option 1
//     const {name, flags} = country;
//     return `
//     <div class='country'>
//         <img src="${flags.png}">
//         <h2> ${name} </h2>
//     </div>
//     `
// }
loadCountries()