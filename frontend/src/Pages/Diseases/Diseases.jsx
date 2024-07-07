import React, { useState } from 'react';

const Diseases = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleWord = (e) => {
    setSearch(e.target.value);
  }

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/diseases?search=${encodeURIComponent(search)}`);
      const data = await response.json();
      setResults(data); // Assuming the response is JSON
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='Search-form'>
      <input type="text" onChange={handleWord} />
      <button onClick={handleSearch}>Search</button>

      <div>
        <h2>Results:</h2>
        <ul>
          {results.map((result, index) => (
            <li key={index}>{result.title}</li> // Adjust based on API response structure
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Diseases;
