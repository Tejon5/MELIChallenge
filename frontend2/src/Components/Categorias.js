import React, { useEffect, useState } from "react";
import {Dropdown, DropdownButton} from "react-bootstrap";
import axios from "axios";

const Categorias = () => {

    const initialState = {name:""}
    const [category, setCategory] = useState(initialState);
  

    useEffect(() => {
        axios.get('https://api.mercadolibre.com/sites/MLA/categories')
        .then(response=>{
            console.log(response)
           const category= response
        setCategory(category)
    })
    },[]);
 // console.log(category.data.map(e=>e.name))
//mapear eso abajo

    return (
        <>
            <DropdownButton id="dropdown-basic-button" title="Categorias">
                {category.data && category.data.map(e=>(
             <Dropdown.Item href="#/action-1">{e.name}</Dropdown.Item>
             ))}

            </DropdownButton>

        </>
    )
}

export default Categorias;