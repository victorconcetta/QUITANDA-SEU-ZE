import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: column;
  width: 50vw;
  min-height: 300px;
  height: auto;
  border-radius: 30px;
  border: 12px solid var(--principal);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  overflow: hidden;


@media (max-width: 900px) {
    border: 6px solid var(--principal);
}
`
export const Content = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 20px;
justify-content: center;
text-align: justify;

p {
  font-size: clamp(16px, 2vw, 24px);

    @media (max-width: 900px) {
  font-size: 17px;
  }
}

`
export const Titulo = styled.h2`
background: var(--principal);
text-align: center;
width: 100%;
padding-bottom: 10px;
height: auto;
overflow: hidden;
font-size: clamp(8px, 3vw, 20px);
  border-radius: 10px 10px 0 0;
  
  
`





