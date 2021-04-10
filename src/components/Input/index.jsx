import Button from '../Button'
import * as S from './styles'

const Input = ({
  label,
  type,
  name,
  value,
  withButton = false,
  className,
  onChange,
  error,
  onBlur
}) => (
  <S.Wrapper className={className}>
    <S.ContentWrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <S.Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.ContentWrapper>
    {withButton && <Button text="Entrar" className="pl-3 pr-3" />}
  </S.Wrapper>
)

export default Input
