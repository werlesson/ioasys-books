import * as S from './styles'
import { FiLogOut } from 'react-icons/fi'

const UserInfo = ({ name }) => (
  <S.Wrapper>
    <span>
      Bem vindo, <strong>{name}</strong>!
    </span>
    <S.Circle className="ml-2">
      <FiLogOut />
    </S.Circle>
  </S.Wrapper>
)

export default UserInfo
