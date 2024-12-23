import styled from 'styled-components';
import {motion} from 'framer-motion';


export const About = styled(motion.div) `
    min-height:90vh;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding: 5rem 10rem;
    color:white;

    @media (max-width: 400px){
        display:block;
        padding: 2rem 2rem;
        text-align:center;
    }

    @media only screen and (min-width: 401px)  and  (max-width: 768px){
       flex-direction: column;
        text-align:center;
    }


`;

export const Description = styled.div `
    flex:1;
    padding-right:5rem;
    z-index: 2;
    h2{
        font-weight: lighter;
    }

    @media (max-width: 400px){
        padding: 0;
        h2{
            font-size: 2rem;
        }
        p{
            font-size: 2rem;
        }
        button{
            margin: 2rem 0rem 5rem 0rem;
        }
    }
    @media only screen and (min-width: 401px)  and  (max-width: 768px){
        padding: 0;
        
        p{
            font-size: 2rem;
        }
        button{
            margin: 2rem 0rem 5rem 0rem;
        }
    }
`;

export const Image = styled.div `
    flex: 1;
    overflow:hidden;
    z-index: 2;
    img{
        width: 100%;
        height: 80vh;
        object-fit:cover;
        border-radius: 15%;
        opacity: 85%;
    }

     @media only screen and (max-width: 2200px){
        img{
            height: 50%;
            width:100%;
        }
    }

     @media (max-width: 400px){
        img{
            margin-top: 4rem;
            height: 40vh;
        }
    }
    @media only screen and (min-width: 401px)  and  (max-width: 768px){
        img{
            height: 40vh;
            width:90vw;
        }
    }

   
`

export const Hide = styled.div `
    overflow:hidden;
`