import styled from "styled-components";

import kalashnikov from "../../assets/ak.png";
import kalapre from "../../assets/pres.png";

export const Caixa = styled.div`
@import url ('https://fonts.googleapis.com/css?family=Playfair+Display:400,400i,700,700i,900,900i&display=swap&subset=cyrillic,latin-ext,vietnamese');
color: #f8f8f8;
background: #000 url(${kalashnikov}) no-repeat center;
height: 100%;
background-size:cover;

div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
}

form {
  width: 100%;
  max-width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
}

label,.link{ 
  font-weight:bold;
  font-size: 2em;

}

label,
input,
button,
.link {
  width: 100%;
}

input,
  button {
    height: 40px;
    border: 0;
    font-size: 1.2em;
    outline: 0;
    font-weight:bold;
}

input {
  background: rgba(255, 255, 255, 0.2);
  color: #FFFFFF;
  padding: 0 15px;
}

button {
  margin-top: 20px;
  margin-bottom: 80px;
  font-weight: bold;
  font-size: 1.8em;
}

form h1 {
  margin-bottom: 80px;
}
.link{
  display: flex;
  color:#f8f8f8;
  text-decoration:none;
  justify-content: center;
  align-items: center;
}

@media (max-width: 899px){
  background: url(${kalapre}) no-repeat center;
  background-size: cover;
}

`;