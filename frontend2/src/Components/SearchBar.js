import React, { useState,useEffect } from "react";
import {Form, FormControl, Button} from "react-bootstrap";
import { getSearch } from "../Actions/searchAction";
import {useDispatch} from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";




const SearchBar = ()=>{
    let history = useHistory();
    const dispatch = useDispatch()    

    
    const [keyword, setKeyword] = useState("")
    const [search, setSearch]=useState()


    
    
    const handleSubmit =(e)=>{
        e.preventDefault();
        axios.get(`http://localhost:3001/api/search/${keyword}`)
        .then(response=>{
            console.log(response)
            const search = response
            setSearch(response)
            history.push("/search")
           
        })
     
        setKeyword("")
    }
  //  console.log(search.data)

    const handleChange = (e) =>{
        dispatch(getSearch(keyword))
    }

    

return(
    <Form inline onSubmit={handleSubmit}>
    <FormControl type="text" placeholder="Busca aqui el producto" 
     className="mr-sm-2" value={keyword} onChange={e =>setKeyword(e.target.value)} />
    <Button variant="outline-info" type="submit"   >Buscar</Button>
  </Form>

)
}

export default SearchBar;