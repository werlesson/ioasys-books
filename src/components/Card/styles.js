import styled from 'styled-components'

export const Wrapper = styled.article`
  display: flex;
  min-width: 270px;
  min-height: 160px;
  background: #ffffff;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  border-radius: 4px;
  padding: 20px;
  cursor: pointer;
`
export const Cover = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20px;
`

export const ContentTitle = styled.div``

export const ContentDetails = styled.div``

export const Title = styled.h4`
  font-size: 14px;
  line-height: 20px;
  color: #333333;
`

export const Author = styled.span`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  color: #ab2680;
`

export const Details = styled.div`
  font-size: 12px;
  line-height: 20px;
  color: #999999;
`
