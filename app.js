const fetchCountries = async () => {
    // getting data from API
    const url = path => `https://restcountries.com/v2/${path}`

    const countriesArray = []

    countriesArray.push(await fetch(url("all"))
        .then(res => res.json())
    )



    // spreading the data to each country
    let countriesLi = ''

    if (countriesArray.length !== 0) {
        countriesArray[0].forEach(country => {
            const eachCountry = `
                <li class="countryCard ${country.region}">
                    <div class="countryCard__inner">
                        <div class="countryCard__inner-Front">
                            <img class="countryCard__flag"
                            alt="Bandeira do ${country.name}"
                            src="${country.flags.png}" />
                        </div>
                        <div class="countryCard__inner-Back">
                            <h3>${country.name}</h3>
                            <p><strong>Nome nativo: </strong>${country.nativeName}</p>
                            <p><strong>Capital: </strong>${country.capital}</p>
                            <p><strong>Região: </strong>${country.region}</p>
                            <p><strong>Sub-região: </strong>${country.subregion}</p>
                        </div>
                    </div>
                    </li>
                    
            `
            countriesLi += eachCountry
        });
    }

    // insert data in the URL
    const ul = document.getElementById('countryList__list');
    ul.innerHTML = countriesLi
}

fetchCountries();