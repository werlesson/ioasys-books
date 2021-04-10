import Logo from '../Logo'
import UserInfo from '../UserInfo'
import * as S from './styles'

const Navbar = () => (
  <S.Wrapper>
    <Logo isBlack />
    <UserInfo name="Werlesson" />
  </S.Wrapper>
)

export default Navbar
