import React from "react";

import { Link } from "react-router-dom";
import {Caixa} from "./style";

export default function Autenticar(){
    return (
        <Caixa>
            <div>
                <form>
                    <h1>Autenticação</h1>
                    <label>Nickname</label>
                    <input type="text" />
                    <label>Password</label>
                    <input type="text" />
                    <button type="submit">Autenticar</button>
                    <Link className="link" to="/Recuperar">
                        <p> Recuperar Senha</p>
                    </Link>
                </form>
            </div>
        </Caixa>    
    );
}