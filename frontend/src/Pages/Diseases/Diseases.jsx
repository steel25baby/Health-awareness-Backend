import React, { useEffect, useState } from 'react';

const Diseases = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:4001/api/diseases/')
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        console.log(data); 
        const diseases = data.diseases; 
        setData(Array.isArray(diseases) ? diseases : []); 
        setFilterData(Array.isArray(diseases) ? diseases : []); 
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  const handleFilter = (value) => {
    const res = filterData.filter(f => 
      f.commonName.toLowerCase().includes(value.toLowerCase()) ||
      f.scientificName.toLowerCase().includes(value.toLowerCase()) ||
      f.diseaseAbout.toLowerCase().includes(value.toLowerCase()) ||
      f.diseaseCause.toLowerCase().includes(value.toLowerCase()) ||
      f.diseaseTreatment.toLowerCase().includes(value.toLowerCase())
    );
    setData(res);
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className='search'>
        <input 
          type="text" 
          placeholder='search here' 
          onChange={e => handleFilter(e.target.value)} 
        />
      </div>
      <div className='results'>
        {data.map((d, i) => (
          <div key={i} className='disease'>
            <h2>{d.commonName}</h2>
            <p><strong>Scientific Name:</strong> {d.scientificName}</p>
            <p><strong>About:</strong> {d.diseaseAbout}</p>
            <p><strong>Cause:</strong> {d.diseaseCause}</p>
            <p><strong>Treatment:</strong> {d.diseaseTreatment}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Diseases;
