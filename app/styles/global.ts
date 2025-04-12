import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    :root {
      --font-novatica-semi-bold: 'Novatica SemiBold', sans-serif;
      --font-montreal-book: 'Montreal Book', sans-serif;
      --font-montreal-medium: 'Montreal Medium', sans-serif;
      --font-two-text-italic: 'TwoText Italic', sans-serif;
    }
    html,
    body {
      max-width: 100vw;
      overflow-x: hidden;
      background-color: #0E0E0E;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    p,
    a,
    button, li, a, span, small, label {
      margin: 0;
    }

    a {
      text-decoration: none;
    }
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    ::-webkit-scrollbar {
      width: 9px;
    }
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background: #F3F3F3;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #cccccc;
    }
    /* Firefox */
    input[type=number] {
      -moz-appearance: textfield;
    }
    .MuiPickersCalendarHeader-label {
      text-transform: capitalize !important;
    }
    .MuiInputLabel-root {
      font-size: 15px !important;
      margin-top: 0.5px !important;
    }
    /* New Styles MUI OTP Input */
    .MuiOtpInput-Box
    .MuiOutlinedInput-notchedOutline {
      border-color: transparent !important;
    }
    .MuiOutlinedInput-root .Mui-disabled {
      background: #FAFAFF !important;
    }
    .MuiOutlinedInput-root .Mui-disabled + .MuiOutlinedInput-notchedOutline {
      border-color: initial !important;
    }
    .Mui-disabled .MuiOutlinedInput-notchedOutline {
      border-color: initial !important;
    }
    .MuiOtpInput-Box > .MuiFormControl-root {
      border: 1px solid #B7BABD;
      border-right: 0px;
    }
    .MuiOtpInput-Box > .MuiFormControl-root:first-child {
      border-radius: 4px 0 0 4px;
    }
    .MuiOtpInput-Box > .MuiFormControl-root:last-child {
      border-radius: 0 4px 4px 0;
      border-right: 1px solid #B7BABD;
    }
    .css-1bw0nnu-MuiStep-root {
      padding: 0;
    }
`;
