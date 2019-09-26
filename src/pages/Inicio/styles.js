import styled from "styled-components";

import ia2 from "../../assets/image005.png";
import imbelD1 from "../../assets/imbeld1.png";

export const Caixa = styled.div`
@import url ('https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i&display=swap&subset=cyrillic,latin-ext,vietnamese');
color: #f8f8f8;
background: #000 url(${ia2}) no-repeat center;
height: 100%;
background-size:cover;

.main-header {
    height: 80px;
    background: #292929e6;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section {
    width: 100%;
    max-width: 798px;
    margin: 30px auto 110px;
    padding: 20px;
  }

  nav {
    background: #292929e6;
    height: 80px;
    width: 100%;
    color: #6f6f6f;
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
  }

  nav .link {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:#f8f8f8;
    text-decoration:none;
  }

  nav .link img {
    display: block;
    
  }
  @media (max-width: 899px){
    background: url(${imbelD1}) no-repeat center;
    background-size: cover;
  }
`;
