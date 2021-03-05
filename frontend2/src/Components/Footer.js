import React from "react"

const Footer = () =>{

    return (
 
        <footer className="container-footer">
            <p className="float-right"><a href="/">Volver al Home</a></p>
            <p>&copy; {(new Date().getFullYear())} Tejon Shop, Inc. &middot; <a href="#">Política de Privacidad</a> &middot; <a href="#">Términos</a></p>
        </footer>
 
    )
}

export default Footer;