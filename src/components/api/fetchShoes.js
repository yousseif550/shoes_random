import React, { useState, useEffect } from "react";

import "../css/styles.css";

export function Fetch() {

 const [data, setData] = useState([]);
 const [shoes,setShoes] = useState([])
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 var id_random = Math.floor(Math.random() * 100)

 function refreshPage() {
    window.location.reload(false);
  }

 useEffect(() => {
    fetch("https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
            "x-rapidapi-key": "c4b8c804d1msh03acf4c845d254cp18e6bajsn56b68b8ab423"
        }
    })
    .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        console.log(response);
        return response.json();
      })
      .then((data) => {
        setData(data.results);
        setShoes(data.results[id_random])
        setError(null);
        console.log('shoes', shoes)
        console.log('Data', data)
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
}, []);

return (
<div className="App">
  <h3>Which shoes to choose today ? 🤔</h3>
  {loading && <div>SEARCHING FOR THE PERFECT PAIR...</div>}
  {error && (
    <div>{`There is a problem fetching the post data - ${error}`}</div>
  )}
  <div>
      <button onClick={refreshPage}>CHOOSE ANOTHER</button>
  </div>
  <div className="shape">
    <p>  {shoes?.title}</p>
    <p>  {shoes?.brand}</p>
    {/* <p>  {shoes?.media.imageUrl}</p> */}
    <img 
      className="photo"
      // src={shoes?.media.imageUrl}
      alt={shoes?.title} 
      />
  </div>
</div>
);
}