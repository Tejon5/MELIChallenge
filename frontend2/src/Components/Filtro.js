import React from 'react'
import { Button, ButtonGroup, Badge } from 'react-bootstrap'




const Filtro = ({ search ,setSearch}) => {


  

  
  const filtrarUsado = () => {
//  const usados = [...search].filter((e) => (e.condition.length === 4));
  const usados = [...search].sort((a,b)=>(a.condition<b.condition) ? 1 :-1)
  setSearch(usados);
  console.log(usados);
}

const filtrarNuevo = () => {
  //  const nuevos = [...search].filter((e) => (e.condition.length === 3));
  const nuevos = [...search].sort((a,b)=>(a.condition>b.condition) ? 1 :-1)
  setSearch(nuevos);
  console.log(nuevos);
}
/*
const muestraTutti = () => {
  const tutti = [...search]
  setSearch(tutti);
  console.log(tutti)
}
*/
const menorPrecio = () => {
  const low = [...search].sort((a, b) => (a.price > b.price ? 1 : a.price < b.price ? -1 : 0))
  setSearch(low)
  console.log(low)
}
const mayorPrecio = () => {
  const alto = [...search].sort((a, b) => (a.price < b.price ? 1 : a.price > b.price ? -1 : 0))
  setSearch(alto)
  console.log(alto)
}


if(window.location.href.indexOf("search")>-1){
  
  return (
    <div>
                  <h4>
                <Badge variant="info">Ordene los productos a su gusto</Badge>
            </h4>
      <ButtonGroup aria-label="Basic example">
        <Button variant="outline-info" value="used" onClick={() => filtrarUsado()} >Mostrar Usados</Button>
        <Button variant="outline-info" value="new" onClick={() => filtrarNuevo()}>Mostar Nuevos</Button>
{/*        <Button variant="outline-info" value="todos" onClick={() => muestraTutti()}>Mostar Todos / Sin Orden</Button>*/}
        <Button variant="outline-info" value="menor" onClick={() => menorPrecio()}>Menor Precio</Button>
        <Button variant="outline-info" value="mayor" onClick={() => mayorPrecio()}>Mayor Precio</Button>
      </ButtonGroup>


    </div>
  )
}else{
  return(
    <div>

    </div>
  )
}
}

export default Filtro;