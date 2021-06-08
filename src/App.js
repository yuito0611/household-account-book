import React from 'react';

import Data from './components/Data';
import Container from 'react-bootstrap/Container';

// react-bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row >
          <Col></Col>

          <Col sm={8} md={6}>
            <Card>
              <Card.Header><h1>家計簿</h1></Card.Header>
              <Card.Body>
                <Data />
              </Card.Body>
            </Card>
          </Col>

          <Col></Col>
        </Row>
      </Container>


    </div>
  );
}

export default App;
