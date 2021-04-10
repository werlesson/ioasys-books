import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 0.2rem 1rem;
  background: rgba(0, 0, 0, 0.32);
  backdrop-filter: blur(2px);
  /* Note: backdrop-filter has minimal browser support */
  border-radius: 4px;
  max-width: 368px;
  width: 100%;
  height: 60px;
`
export const Label = styled.label`
  display: block;
  font-size: 0.75rem;
  line-height: 1.6rem;
  text-align: left;
  opacity: 0.5;
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
  &:focus,
  &:hover {
    outline: none;
    /* border-color: #fb1;
    background: white;
    box-shadow: 0 0 0 3px #fea; */
  }
`
export const Error = styled.p`
  color: #f31;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`
