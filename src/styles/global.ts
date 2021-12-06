import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin:0;
  padding:0;
  outline:0;
  box-sizing: border-box;
}
html, body, #root{
  max-height:100vh;
  max-width: 100vw;

  width: 100%;
  height: 100%;
}
body{
  -webkit-font-smoothing: antialiased;
}
body, input, button{
  font-family: 'Poppins', sans-serif;;
  font-size:16px;
}
h1,h2,h3,h4,h5,h6, strong{
  font-weight: 500;
}
button{
  cursor:pointer;
}
*, button,input{
  border:0;
  background:none;
}
a{
  text-decoration:none;
}

.tag {
  filter: drop-shadow(3px 3px 3px rgba(0, 0, 0, 1));
}
.img-tag > div {
  display: contents !important;
}
.img-tag > div > img {
  transform: rotate(-6deg);
  padding: 5px !important;
}

.githubCorner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out;
}
@keyframes octocat-wave {
  0%,
  100% {
    transform: rotate(0);
  }
  20%,
  60% {
    transform: rotate(-25deg);
  }
  40%,
  80% {
    transform: rotate(10deg);
  }
}
@media (max-width: 500px) {
  .githubCorner:hover .octo-arm {
    animation: none;
  }
  .githubCorner .octo-arm {
    animation: octocat-wave 560ms ease-in-out;
  }
}

::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #322659;
  border-radius:4px;
}
::-webkit-scrollbar-thumb {
  background: #d53f8c;
  border-radius:4px;

}
::-webkit-scrollbar-thumb:hover {
  background: #a42767;
  border-radius:4px;
}

::-webkit-input-placeholder {
   text-align: center;
}

:-moz-placeholder { /* Firefox 18- */
   text-align: center;  
}

::-moz-placeholder {  /* Firefox 19+ */
   text-align: center;  
}

:-ms-input-placeholder {  
   text-align: center; 
}

input:focus > .extra {
  .search svg{

  }
  background-color: red;
}

`;
