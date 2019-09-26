import React from "react";
import { Link } from "react-router-dom";

import { Caixa } from "./styles";
import imhome from "../../assets/home.svg";
import imlog from "../../assets/signin.svg";




export default function Inicio() {

  return (
    <Caixa>
      <header className="main-header">
        <h1>Inicio</h1>
      </header>

      <section>
        
      </section>

      <nav>
        <Link className="link" to="/Inicio">
          <img src={imhome} alt="Inicio" />
          <p>Inicio</p>
        </Link>
        <Link className="link" to="/Autenticar">
          <img src={imlog} alt="Autenticar" />
          <p>Autenticar</p>
        </Link>
      </nav>
    </Caixa>
  );
}
