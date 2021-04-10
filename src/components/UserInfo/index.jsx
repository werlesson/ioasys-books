import * as S from './styles'
import { FiLogOut } from 'react-icons/fi'

const UserInfo = ({ name }) => (
  <S.Wrapper>
    <span>
      Bem vindo, <strong>{name}</strong>!
    </span>
    <span className="ml-2">
      <FiLogOut />
    </span>
  </S.Wrapper>
)

export default UserInfo
