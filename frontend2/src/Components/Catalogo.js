import React, { useState, Fragment } from "react";
import { Row,  } from "react-bootstrap"
import Filtro from "./Filtro";
import ProductCard from "./ProductCard";
import Pagination from "./Pagination";



const Catalogo = ({ search, setSearch }) => {
    // Paginacion
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(30);

    //Get Current Posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = search.slice(indexOfFirstPost, indexOfLastPost);

    //Change Page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // <Filtro search={currentPosts}/>



    if(!currentPosts){
        return(<>
            No hay productos buscados
        </>)
    }else{
    return (
        <Fragment>

            <Filtro search={search} setSearch={setSearch} />

            <Row>

                <ProductCard search={currentPosts} />

            </Row>
            <Pagination postsPerPage={postsPerPage} totalPosts={search.length}
                paginate={paginate} />
        </Fragment>

    )
}
}
export default Catalogo;