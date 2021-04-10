import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  html, body, #__next {
    height: 100%;
    font-family: 'Heebo', sans-serif;
  }

/* Margin and Padding */
  .mb-1 {
    margin-bottom: 0.5rem !important;
  }
  .mb-2 {
    margin-bottom: 1.0rem !important;
  }
  .mb-3 {
    margin-bottom: 1.5rem !important;
  }
  .mb-4 {
    margin-bottom: 2.0rem !important;
  }
  .mb-5 {
    margin-bottom: 2.5rem !important;
  }
  .mb-6 {
    margin-bottom: 3rem !important;
  }
  .mt-1 {
    margin-top: 0.5rem !important;
  }
  .mt-2 {
    margin-top: 1.0rem !important;
  }
  .mt-3 {
    margin-top: 1.5rem !important;
  }
  .mt-4 {
    margin-top: 2.0rem !important;
  }
  .mt-5 {
    margin-top: 2.5rem !important;
  }
  .ml-1 {
    margin-left: 0.5rem !important;
  }
  .ml-2 {
    margin-left: 1.0rem !important;
  }
  .ml-3 {
    margin-left: 1.5rem !important;
  }
  .ml-4 {
    margin-left: 2.0rem !important;
  }
  .ml-5 {
    margin-left: 2.5rem !important;
  }
  .mr-1 {
    margin-right: 0.5rem !important;
  }
  .mr-2 {
    margin-right: 1.0rem !important;
  }
  .mr-3 {
    margin-right: 1.5rem !important;
  }
  .mr-4 {
    margin-right: 2.0rem !important;
  }
  .mr-5 {
    margin-right: 2.5rem !important;
  }
  .pb-1 {
    padding-bottom: 0.5rem !important;
  }
  .pb-2 {
    padding-bottom: 1.0rem !important;
  }
  .pb-3 {
    padding-bottom: 1.5rem !important;
  }
  .pb-4 {
    padding-bottom: 2.0rem !important;
  }
  .pb-5 {
    padding-bottom: 2.5rem !important;
  }
  .pt-1 {
    padding-top: 0.5rem !important;
  }
  .pt-2 {
    padding-top: 1.0rem !important;
  }
  .pt-3 {
    padding-top: 1.5rem !important;
  }
  .pt-4 {
    padding-top: 2.0rem !important;
  }
  .pt-5 {
    padding-top: 2.5rem !important;
  }
  .pl-1 {
    padding-left: 0.5rem !important;
  }
  .pl-2 {
    padding-left: 1.0rem !important;
  }
  .pl-3 {
    padding-left: 1.5rem !important;
  }
  .pl-4 {
    padding-left: 2.0rem !important;
  }
  .pl-5 {
    padding-left: 2.5rem !important;
  }
  .pr-1 {
    padding-right: 0.5rem !important;
  }
  .pr-2 {
    padding-right: 1.0rem !important;
  }
  .pr-3 {
    padding-right: 1.5rem !important;
  }
  .pr-4 {
    padding-right: 2.0rem !important;
  }
  .pr-5 {
    padding-right: 2.5rem !important;
  }
`

export default GlobalStyles
