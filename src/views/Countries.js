function Countries({countries, continent}) {
    const countriesJsx = countries.map((country, index) => (
        <div key={index} className="country-row">
            <div className="short">{country.code}</div>
            <div className="wider">{country.name} </div>
            <div className="wider">{country.capital}</div>
        </div>
    ))

    return (
        <>
            <h1>Countries in {continent} </h1>
            {countriesJsx}
        </>
        
    )

}

export default Countries;