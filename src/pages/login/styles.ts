import styled from "styled-components";



export const Container = styled.div`
  display: flex;
  height: 100vh;
`;

export const ImageContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #EFF3F7 ;


  @media (max-width: 900px) {
    display: none;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('./teste.svg');
    background-size: cover; /* Valor de tamanho ajustável */
    background-position: bottom;
    opacity: 0.1; /* Valor de opacidade ajustável */
  }
`;




export const ImageWrapper = styled.div`
  max-width: 100%;
  max-height: 100%;
`;

export const FormContainer = styled.div`
  flex: 1.5;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ImageLogin = styled.img`
    max-width: 100%;
    margin: 0px auto;
    display: block;
    width: 300px;
    position: relative;
    z-index: 5;
`;

export const FormContainerWidth = styled.div`
    max-width: 600px;
    width: 100%;

    @media (max-width: 768px) {
        max-width: 90%;
    }

`;


