import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';

import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Card } from "react-bootstrap";


export function Fetch() {

 const [data, setData] = useState([]);
 const [shoes,setShoes] = useState()
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



useEffect(() => {
  localStorage.setItem("myShoes", JSON.stringify(shoes));
}, [shoes]);


return (
    <div className="App">
      <h3>Which shoes to choose today ? 🤔</h3>
      {loading && <div>SEARCHING FOR THE PERFECT PAIR...</div>}
      
      {!loading && (<div>
        <Button variant="success" onClick={refreshPage}>CHOOSE ANOTHER</Button>
      </div>)}

      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      

      <Container fluid className="App py-2 overflow-hidden">
      {/* <Row className="justify-content-center">Some text here</Row> */}
      <Row className="card-example d-flex flex-row flex-nowrap overflow-auto">
        <Card>
          <Card.Body>
            <Card.Title className="text-muted">
              SNEACKER OF DAY 
              <br></br>
              <Button variant="danger">ADD TO FAV</Button>
            </Card.Title>
            <Card.Text className="text-muted">
                {shoes?.title}
                <br/>
                <img 
                className="photo"
                src={shoes?.media.imageUrl}
                alt={shoes?.title} 
                />
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
      

    </div>
);
}