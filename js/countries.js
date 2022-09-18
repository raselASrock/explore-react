console.log("countries added");
const loadCountries = () =>{
    fetch('https://restcountries.com/v2/all')
    .then(response => response.json())
    .then(data => displayCountries(data))
}
const displayCountries = countries => {
    console.log(countries);
}
loadCountries()