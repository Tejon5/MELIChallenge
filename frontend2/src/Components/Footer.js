import React from "react"

const Footer = () =>{

    return (
 
        <footer className="container-footer bg-dark mt-20px ">
            <p className="float-right"><a href="https://mchallenge-tejon5.vercel.app/" >Volver al Home</a></p>
            <p className="text-white w-80">&copy; {(new Date().getFullYear())} Tejon Shop, Inc. &middot; <a href="https://mchallenge-tejon5.vercel.app/">Política de Privacidad</a> &middot; <a href="https://mchallenge-tejon5.vercel.app/">Términos</a></p>
        </footer>
 
    )
}

export default Footer;