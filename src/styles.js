import styled from "styled-components";
import Background from "./assets/background1.svg"


export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 150vh;
`;

export const Image = styled.img`
    margin-top: 30px;
`;

export const ContainerItems = styled.div`
    background: linear-gradient(
         157.44deg,
         rgba(255,255,255,0.6)0.84%,
         rgba(255,255,255,0.6) 0.85%,   
         rgba(255,255,255,0.15) 100%
    );
    
    border-radius: 61px 61px 0 0;

    padding: 50px 36px;    

    display:flex;
    flex-direction:column;

    height: 100vh;
`;

export const H1 = styled.h1`
    font-style: normal;
    font-size: 34px;
    font-weight: 700;
    line-height: 40px;

    color: #fff;
    margin-bottom: 80px;
    text-align: center;
`;

export const InputLabel = styled.p`
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: -0.408px;
    text-align: left;

    color: #EEE;

    margin-left:25px;

`;
export const Input = styled.input `
    border: 0;
    outline: none;

    background: rgba(255,255,255,0.25);
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 14px;

    width: 342px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 34px;

    color: #fff;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
`;

export const Button = styled.button `
    width: 342px;
    height: 74px;

    background: rgba(0,0,0,0.8);
    border-radius: 14px;
    border: 0;

    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 28px;

    color: #fff;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;

    &:hover{
        opacity: 0.7;
    }

    &:active{
        opacity: 0.4;
    }

`;

export const User = styled.li`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top:20px;

    border: 0;
    outline: none;

    background: rgba(255,255,255,0.25);
    box-shadow: 0px 4px 4px rgba(0,0,0,0.25);
    border-radius: 14px;    

    width: 342px;
    height: 58px;

p {
    color: #fff;

    font-style: normal;
    font-weight: normal;

    font-size: 20px;
    line-height: 28px;
}

button{
    background: none;
    border: 0;
    cursor: pointer;
}

`;