import * as S from './styles'
import { FiLogOut } from 'react-icons/fi'

const UserInfo = ({ name }) => (
  <S.Wrapper>
    <S.Greating>
      Bem vindo, <strong>{name}</strong>!
    </S.Greating>
    <S.Circle className="ml-2">
      <FiLogOut />
    </S.Circle>
  </S.Wrapper>
)

export default UserInfo
