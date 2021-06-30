import React from "react";
import { Fragment } from "react";
import {Card, Button, ListGroup, ListGroupItem, Col, Image} from "react-bootstrap";
import "./productCard.css"

const ProductCard = ({ search }) =>{



console.log(search)
    return (

<Fragment>

{search && search.map(e=>(
    <Card className="card border border-dark " >
     <Col xs={50} md={50} >
      <Image className="imgCard border border-secondary border-1" src={e.thumbnail} thumbnail />
    </Col>
  <Card.Body>
    <Card.Title className="title">{e.title}</Card.Title>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem className="precio">Precio: ${e.price} </ListGroupItem>
    <ListGroupItem className="estado">Estado: {e.condition}</ListGroupItem>
    <ListGroupItem className="stock">Stock: {e.available_quantity}</ListGroupItem>
  </ListGroup>
      
  </Card>
 ))}
    

</Fragment>



    )
}

export default ProductCard;