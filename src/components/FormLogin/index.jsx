import Input from '../Input'
import Logo from '../Logo'
import * as S from './styles'

const FormLogin = () => (
  <S.Wrapper>
    <div className="mb-6">
      <Logo />
    </div>
    <Input className="mb-2" label="Email" type="text" name="username" />
    <Input label="Senha" type="password" name="password" />
  </S.Wrapper>
)

export default FormLogin
