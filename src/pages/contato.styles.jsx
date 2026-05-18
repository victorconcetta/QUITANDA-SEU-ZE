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
  }
`
export const DivContato = styled.div`
display: flex;
justify-content: center;
width: 100%;
`


export const Div = styled.div`
width: 30%;
height: auto;

`
export const DivHead = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: auto;

h1 {
    font-size: clamp(20px, 4vw, 60px);
    text-align: center;

}
h2 {
    font-size: clamp(20px, 1.5vw, 30px);
        text-align: center;
}
`
export const DivText = styled.div`
display: flex;
margin-top: 20px;
flex-direction: column;
align-items: center;
justify-content: flex-start;
width: 100%;

min-height: 100px;

p {
  padding: 0px;
  margin: 0px;
  font-size: clamp(12px, 1vw, 24px)


}
`
export const DivLine = styled.div`
  width: 2px;
  align-self: stretch;   /* estica para ocupar a altura dos irmãos no flex */
  background: #b6b6b6;
  display: block;
`
