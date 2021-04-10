import Card from '../Card'
import Pagination from '../Pagination'
import * as S from './styles'

const GridCard = ({ className }) => (
  <>
    <S.Wrapper className={className}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </S.Wrapper>
    <Pagination first="1" last="100" className="mt-3 mb-6" />
  </>
)

export default GridCard
