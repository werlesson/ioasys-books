import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0.25rem 1rem;
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 4px;
  max-width: 368px;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
`

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Label = styled.label`
  display: block;
  font-size: 0.75rem;
  text-align: left;
  opacity: 0.5;
  margin-bottom: 0.15rem;
`
export const Input = styled.input`
  border: none;
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0;
  border-radius: 0.4rem;
  transition: 0.2s;
  background: transparent;
  color: #fff;
  font-family: 'Heebo', sans-serif;
  &:focus,
  &:hover {
    outline: none;
  }
`
export const Error = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`
