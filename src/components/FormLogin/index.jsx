import Error from '../Error'
import Input from '../Input'
import Logo from '../Logo'
import * as S from './styles'

const FormLogin = () => {
  const error = true
  return (
    <S.Wrapper>
      <div className="mb-6">
        <Logo />
      </div>
      <Input className="mb-2" label="Email" type="text" name="username" />
      <Input withButton label="Senha" type="password" name="password" />
      {error && <Error text="Email e/ou senha incorretos." />}
    </S.Wrapper>
  )
}

export default FormLogin
