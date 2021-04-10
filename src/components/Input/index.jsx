import * as S from './styles'

const Input = ({
  label,
  type,
  name,
  value,
  className,
  onChange,
  error,
  onBlur
}) => (
  <S.Wrapper className={className}>
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
  </S.Wrapper>
)

export default Input
