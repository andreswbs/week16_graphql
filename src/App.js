import './App.css';
import {useEffect, useState} from 'react'
import Countries from './views/Countries';

function App() {
  const [countries, setCountries] = useState([])

  async function loadCountries() {
    const options = {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query: `
        {continent(code: "AN") {
          name,
          countries {
            code,
            name,
            capital
          }
        }}        
        `
      })
    };
  
    const response = await fetch(`https://countries.trevorblades.com/`, options)
    const result = await response.json()
    console.log(result.data.continent?.countries || [])
    setCountries( (result.data.continent?.countries || [] ))
  }
  useEffect(() => {
    loadCountries()
  }, [])
  return (
    <div className="App">
      <Countries countries={countries} continent="Antartica" />
    </div>
  );
}

export default App;
