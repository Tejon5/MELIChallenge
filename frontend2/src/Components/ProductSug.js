import React from "react";
import { Fragment } from "react";
import {Card, Button, ListGroup, ListGroupItem, Col, Image, Row, Badge} from "react-bootstrap";
import {sugeridos} from "../apiSugerencia"

const ProductSug = () =>{




    return (

<Fragment>
<h3>
 <Badge variant="success" >Sugerencias del Autor</Badge>
  </h3>
<Row>
{sugeridos && sugeridos.map(e=>(
    <Card style={{ width: '18rem' }} className="my-3">
     <Col xs={50} md={50} >
      <Image src={e.image} thumbnail />
    </Col>
 
  <Card.Body>
    <Card.Title>{e.name}</Card.Title>
    <Card.Text> {e.description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Precio: ${e.price} </ListGroupItem>
    <ListGroupItem>Stock: siempre disponible</ListGroupItem>
  </ListGroup>
      
  </Card>
 ))}
 </Row>
    

</Fragment>



    )
}

export default ProductSug;