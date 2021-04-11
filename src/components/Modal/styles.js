import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`

/* Modal Content/Box */
export const ModalContent = styled.div`
  margin: 7% auto; /* 15% from the top and centered */
  width: 60%; /* Could be more or less, depending on screen size */
  max-width: 750px;
  background: #ffffff;
  box-shadow: 0px 16px 80px rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  padding: 3rem;
  display: flex;

  @media (max-width: 1200px) {
    width: 70%;
  }
  @media (max-width: 1000px) {
    width: 95%;
    padding: 2rem;
  }
  @media (max-width: 668px) {
    padding: 1rem;
    flex-direction: column;
    margin-top: 4rem;
  }
`

export const Close = styled.span`
  position: absolute;
  right: 1rem;
  top: 1rem;
  height: 40px;
  width: 40px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid rgba(51, 51, 51, 0.2);
  box-sizing: border-box;
  transform: matrix(-1, 0, 0, 1, 0, 0);
  @media (max-width: 668px) {
    z-index: 1;
  }
`

export const Cover = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Img = styled.div`
  height: 420px;
  width: 280px;
  filter: drop-shadow(0px 12px 18px rgba(0, 0, 0, 0.3));
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 3rem;
  @media (max-width: 1000px) {
    margin-left: 2rem;
  }
  @media (max-width: 668px) {
    margin-left: 0;
  }
`
export const ContentTitle = styled.div``
export const ContentDetails = styled.div``
export const ContentResume = styled.div`
  font-size: 12px;
  color: #999999;
`
export const Title = styled.h4`
  font-size: 2rem;
  line-height: 2.5rem;
  color: #333333;
`
export const Subtitle = styled.h5`
  font-size: 0.75rem;
  line-height: 1.75rem;
  color: #333333;
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
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
  display: flex;
  width: 100%;
  justify-content: space-between;
`
