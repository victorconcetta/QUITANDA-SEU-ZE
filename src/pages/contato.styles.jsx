import styled from 'styled-components'
import back_head from '../assets/img/back_head.png'


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 70%;
  max-width: 1500px;
  min-width: 900px;
  height: auto;
  flex-wrap: wrap;
  gap: 20px;


  @media (max-width: 900px) {
    min-width: unset;
    width: 95%;
     margin-top: 0px;
  }
`
export const Head = styled.div`
display: flex;

width: 80%;
align-items: center;
justify-content: center;

@media (max-width: 900px){
  flex-wrap: wrap;
}
`
export const Div = styled.div`
width: 33.3%;
height: auto;



@media (max-width: 900px) { 
  width: 90%;
  height: 120px;
  
}

`
export const DivHead = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: auto;


h1 {
    font-size: clamp(20px, 4vw, 40px);
    text-align: center;
    

}
h2 {
    font-size: clamp(14px, 1.5vw, 26px);
        text-align: center;
}

@media (max-width: 768px){
h1 {
font-size: 22px;
}
}`

export const DivText = styled.div`
display: flex;
margin-top: 20px;
flex-direction: column;
align-items: center;
justify-content: flex-start;
text-align: center;
width: 100%;
min-height: 100px;

p {
  padding: 0px;
  margin: 0px;
  font-size: clamp(12px, 1vw, 16px);
}

@media (max-width: 768px) {
margin-top: 0px;
min-height: 0px;
p {
font-size: 11px;
}
}
`
export const DivLine = styled.div`
  width: 2px;
  align-self: stretch;   /* estica para ocupar a altura dos irmãos no flex */
  background: #b6b6b6;
  display: block;

  @media (max-width: 900px) {
    display: none;
  }
`
export const Unidades = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
justify-content: center;

p {
  font-size: clamp(8px,2vw, 16px);
}
h1 {
    font-size: clamp(20px, 2vw, 28px);
}

@media (max-width: 768px) {
p {
  font-size: 10px;
}

h1 {
    font-size: 16px;
}
}
`
