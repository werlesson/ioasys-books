import styled from 'styled-components'

export const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(2px);
  /* Note: backdrop-filter has minimal browser support */
  font-weight: 700;
  border-radius: 4px;
  padding: 1rem;
  &::before {
    content: '';
    position: absolute;
    border: 10px solid transparent;
    border-bottom-color: rgba(255, 255, 255, 0.4);
    top: -1.25rem;
  }
`
