import Image from 'next/image'
import * as S from './styles'

const Card = () => (
  <S.Wrapper>
    <S.Cover>
      <Image
        height={120}
        width={80}
        src="https://lojasaraiva.vteximg.com.br/arquivos/ids/12108086/1008927999.jpg?v=637142244686730000"
      />
    </S.Cover>
    <S.Content>
      <S.ContentTitle>
        <S.Title>Crossing the Chasm</S.Title>
        <S.Author>Geoffrey A. Moore</S.Author>
      </S.ContentTitle>
      <S.ContentDetails>
        <S.Details>150 páginas</S.Details>
        <S.Details>Editora Loyola</S.Details>
        <S.Details>Publicado em 2020</S.Details>
      </S.ContentDetails>
    </S.Content>
  </S.Wrapper>
)

export default Card
