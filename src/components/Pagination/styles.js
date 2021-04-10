import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 12px;
  line-height: 20px;
  font-weight: 500;
`

export const Circle = styled.span`
  height: 32px;
  width: 32px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 50%;
`

export const Text = styled.span`
  @media (max-width: 669px) {
    display: none;
  }
`
export const TextResponsive = styled.span`
  @media (min-width: 668px) {
    display: none;
  }
`
