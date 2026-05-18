import * as S from './UnidadeCard.styles.jsx'


function UnidadeCard({ titulo, descricao, imagem, altImagem }) {
  return (
    <S.DivUnidades>
      <S.UnidadesCont>
        <S.UnidadesTexto>
          <S.TextoHead>
            <h1>{titulo}</h1>
          </S.TextoHead>
          <S.TextoCont>
            {descricao}
          </S.TextoCont>
        </S.UnidadesTexto>
        <S.UnidadesImagem>
          <img src={imagem} alt={altImagem} />
        </S.UnidadesImagem>
      </S.UnidadesCont>
    </S.DivUnidades>
  );
}
 
export default UnidadeCard;