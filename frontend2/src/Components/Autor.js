import React from "react";
import {Card, ListGroup, ListGroupItem, Col, Image, Row} from "react-bootstrap";

const Autor =()=>{

    return (
      <Row>
<Card style={{ width: '18rem' }} className="cardAutor">
 
  <Col xs={20} md={20}>
      <Image src="https://images.ole.com.ar/2020/08/23/Seale0kGi_340x340__1.jpg" thumbnail />
    </Col>
  <Card.Body>
    <Card.Title>Juan Villalba</Card.Title>
    <Card.Text>
     "Tal vez no duela tanto saber poco, todo se aprende, pero nunca alcanza" Jose Larralde
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>GitHub</ListGroupItem>
    <ListGroupItem>Email</ListGroupItem>
    <ListGroupItem>Tecnologias Aplicadas</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
</Row>
    )
}

export default Autor;