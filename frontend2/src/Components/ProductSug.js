import React from "react";
import { Fragment } from "react";
import {Card, Button, ListGroup, ListGroupItem, Col, Image, Row, Badge} from "react-bootstrap";
import {sugeridos} from "../apiSugerencia";


const ProductSug = () =>{

    return (

<Fragment>
<h3>
 <Badge variant="success" >Sugerencias del Autor</Badge>
  </h3>
<Row>
{sugeridos && sugeridos.map(e=>(
    <Card className="card border border-dark" >
     <Col xs={50} md={50} >
      <Image className="imgCard border border-secondary border-1" src={e.image} thumbnail />
    </Col>
 
  <Card.Body>
    <Card.Title className="title">{e.name}</Card.Title>
    <Card.Text className="text"> {e.description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem className="precio">Precio: ${e.price} </ListGroupItem>
    <ListGroupItem className="estado">Stock: siempre disponible</ListGroupItem>
  </ListGroup>
      
  </Card>
 ))}
 </Row>
    

</Fragment>



    )
}

export default ProductSug;