import React from "react";
import { Fragment } from "react";
import {Card, Button, ListGroup, ListGroupItem, Col, Image} from "react-bootstrap";


const ProductCard = ({ search }) =>{



console.log(search)
    return (

<Fragment>

{search && search.map(e=>(
    <Card style={{ width: '18rem' }} className="my-3">
     <Col xs={50} md={50} >
      <Image src={e.thumbnail} thumbnail />
    </Col>
 
  <Card.Body>
    <Card.Title>{e.title}</Card.Title>
    <Card.Text> No sea un poligrillo, no sea porfiada lleveselo o lo compra otro otario.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Precio: ${e.price} </ListGroupItem>
    <ListGroupItem>Estado: {e.condition}</ListGroupItem>
    <ListGroupItem>Stock: {e.available_quantity}</ListGroupItem>
  </ListGroup>
      
  </Card>
 ))}
    

</Fragment>



    )
}

export default ProductCard;