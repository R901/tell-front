import React from "react";

import { Link } from "react-router-dom";
import {Caixa} from "./styles";

export default function Recuperar(){
    return (
        <Caixa>
            <div>
                <form>
                    <h1>Recuperar Acesso</h1>
                    <label>Nickname</label>
                    <input type="text" />
                    <label>Email</label>
                    <input type="text" />
                    <button type="submit">Recuperar</button>
                    <Link className="link" to="/Autenticar">
                        <p> Voltar para Autenticação</p>
                    </Link>
                </form>
            </div>
        </Caixa>    
    );
}