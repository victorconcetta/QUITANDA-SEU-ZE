import styled from 'styled-components'
import back_head from '../assets/img/back_head.png'

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 0px;
width: 100%;
height: auto;
gap: 30px;
padding: 100px 0px 150px;

@media (max-width: 900px){
padding: 70px 0px 150px;
}
`
export const Head = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-evenly;
    width: 100%;
    height: 250px;
    background: var(--principallight);
background-image: url(${back_head});

@media (max-width: 768px) {
      height: 150px;
}

h1 {
    font-size: clamp( 10px, 2vw, 50px);
    padding: 0px;
    color: var(--principaldarker);
}
`
export const VIcon = styled.div`
  svg {
    color: var(--principaldarker);
    font-size: 5rem;
  }
`
