import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle `
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    
}

html{
    @media only screen and (max-width: 1700px){
        font-size: 75%;
    }

}

body{
    background: #AAD6D7;
    overflow-x: hidden;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #063b42;
    background: transparent;
    color:black;
    transition: all 0.5s ease;
    border-radius: 5%;
    &:hover{
        background-color:#2b737c;
        color:white;
    }
    
}

h2{
    font-family: 'Courgette', cursive;
    font-weight: lighter;
    font-size:4rem;
    color: #3d6c6e
    }
h3{ 
    font-family: 'Satisfy', cursive;
    color:#2b737c;
    }
h4{
    font-size:2rem;
    font-weight: bold;
    color:#2b737c;
}
a{
    font-size:1.1rem;
}
span{
    font-weight: bold;
    color:#13a0a0;
}
p{
    padding: 3rem 0rem;
    color: grey;
    font-size: 1.4rem;
    line-height: 150%;
    font-family: 'Kalam', cursive;
    }

`

export default GlobalStyle;