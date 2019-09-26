import { createGlobalStyle} from "styled-components";

export default createGlobalStyle`
    @import url ('https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i&display=swap&subset=cyrillic,latin-ext,vietnamese');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Playfair Display', serif;
        -webkit-font-smoothing: antialiased !important;
    }

    html,body,#root{
        height: 100%;
    }

    h1{
        font-size: 2.5em;
        font-weight: black;
    }

    h2{
        font-size: 2em;
        font-weight:bold;
    }

   
`;
/*a{
    color:#f8f8f8;
    text-decoration:none;
}*/