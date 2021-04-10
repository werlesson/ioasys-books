import * as S from './styles'

const Logo = ({ className, isBlack = false }) => {
  const src = isBlack ? '/img/logoblack.svg' : '/img/logo.svg'
  return <S.Logo width={200} height={40} src={src} className={className} />
}

export default Logo
