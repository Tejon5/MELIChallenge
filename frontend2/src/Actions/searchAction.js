import {GET_CATEGORIES, GET_SEARCH} from "../Constants/Constants";
import axios from "axios";



export function getSearch(keyword){
    return (dispatch)=>{
        axios.get(`localhost:3001/api/search?q=${keyword}`)
        .then(response=>{
            console.log(response)
            dispatch({type:GET_SEARCH, payload:response.data})
        })
    }
}



export function getCategories (){
    return(dispatch)=>{
        axios.get('https://api.mercadolibre.com/sites/MLA/categories')
        .then(response=>{
            console.log(response)
            dispatch({type:GET_CATEGORIES, payload:response.data})
        })
    }
}
