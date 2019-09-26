import React from "react";
import{ BrowserRouter, Route} from "react-router-dom";

import Inicio from "./pages/Inicio";
import Autenticar from "./pages/Autenticar";
import Recuperar from "./pages/Recuperar";

export default function Routes(){
    return(
        <BrowserRouter>
        <Route path="/Autenticar" component={Autenticar} />
        <Route exact path="/Inicio" component={Inicio} /> 
        <Route path="/Recuperar" component={Recuperar} />
        </BrowserRouter>
    );

}