import * as S from './styles'

const UserInfo = ({ name }) => (
  <S.Wrapper>
    <span>
      Bem vindo, <strong>{name}</strong>!
    </span>
    <span className="ml-2">ICO</span>
  </S.Wrapper>
)

export default UserInfo
