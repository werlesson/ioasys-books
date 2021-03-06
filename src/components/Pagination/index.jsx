import * as S from './styles'
import { HiOutlineChevronRight, HiOutlineChevronLeft } from 'react-icons/hi'

const Pagination = ({ className, first, last }) => (
  <S.Wrapper className={className}>
    <S.Text className="mr-2">
      Página {first} de {last}
    </S.Text>
    <S.Circle>
      <HiOutlineChevronLeft />
    </S.Circle>
    <S.TextResponsive className="ml-1">
      Página {first} de {last}
    </S.TextResponsive>
    <S.Circle className="ml-1">
      <HiOutlineChevronRight />
    </S.Circle>
  </S.Wrapper>
)

export default Pagination
