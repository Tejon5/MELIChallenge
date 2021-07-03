import React, { useState } from "react";
import { Navbar, FormControl, Form, Nav, Button } from "react-bootstrap";
import Categorias from "./Categorias";

import axios from "axios";
import { useHistory } from "react-router-dom"

import Carrusel from "./Carrusel";
import Catalogo from "./Catalogo";



const NavBar = () => {
  let history = useHistory();


  //BUSQUEDA
  const [keyword, setKeyword] = useState("")
  const [search, setSearch] = useState([])




  const handleSubmit = (e) => {
    e.preventDefault();
    axios.get(`http://localhost:3001/api/search/${keyword}`)
      .then(response => {
        console.log(response)
        const result = response.data;
        console.log(result)
        setSearch(result)
        history.push("/search")
      })
    setKeyword("")
  }

/*
  const handleChange = (e) => {
    dispatch(getSearch(keyword))
  }
  */




  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">T-Shop</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link >Novedades</Nav.Link>
        </Nav>
        <Categorias />
        <Form inline onSubmit={handleSubmit}>
          <FormControl type="text" placeholder="Busca aqui el producto"
            className="mr-sm-2" value={keyword} onChange={e => setKeyword(e.target.value)} />
          <Button variant="outline-info" type="submit"   >Buscar</Button>
        </Form>
      </Navbar>
      <Carrusel />
      <Catalogo search={search} setSearch={setSearch}/>


    </>
  )

}

export default NavBar