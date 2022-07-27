import './App.css';
import {useEffect, useState} from 'react'
import Countries from './views/Countries';

function App() {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState("AN")

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
      <input value={filter} onChange={(event)=> {setFilter(event.target.value)}} />
      <button>Search</button>
      <Countries countries={countries} continent="Antartica" />
    </div>
  );
}

export default App;
