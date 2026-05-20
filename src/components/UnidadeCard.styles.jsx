import styled from 'styled-components';

export const DivUnidades = styled.div`
width: 80%;
background: #cecece;
height: auto;

&:hover {
  background: #bebebe;
}

 @media (max-width: 900px) {
    min-width: unset;
    width: 100%;
  }
  
`
export const UnidadesCont = styled.div`
display: flex;
width: 100%;

`
export const UnidadesImagem = styled.div`
display: flex;
justify-content: flex-end;
width: 30%;
height: 100%;

img {
  width: 70%;
}
`

export const UnidadesTexto = styled.div`
width: 70%;
Padding: 30px;
height: auto;

p {
  margin: 0px;

}

 @media (max-width: 768px) {
Padding: 10px;
 }
`
export const TextoHead = styled.div`
width: 100%;
font-size: clamp(20px, 2vw, 28px);
`
export const TextoCont = styled.div`
width: 100%;

p {
  font-size: clamp(8px,2vw, 16px);

  @media (max-width: 768px) {
      font-size: 10px;
  }
}

`