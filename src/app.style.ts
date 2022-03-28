import Colors from "constants/colors";
import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: "Outfit", sans-serif;
  width: 100vw;
  height: 100vh;
  font-size: 19px;
  font-weight: 300;

  button,
  input,
  textarea {
    outline: none;
    border: none;
    font-family: inherit;
    font-size: inherit;
  }

  @keyframes scale-in-x {
    0% {
      transform: scaleX(0);
    }
  
    100% {
      transform: scaleX(1);
    }
  }
  
  @keyframes scale-out-x {
    0% {
      transform: scaleX(1);
    }
  
    100% {
      transform: scaleX(0);
    }
  }
  
  @keyframes scale-in-y {
    0% {
      transform: scaleY(0);
    }
  
    100% {
      transform: scaleY(1);
    }
  }
  
  @keyframes scale-out-y {
    0% {
      transform: scaleY(1);
    }
  
    100% {
      transform: scaleY(0);
    }
  }

  a {
    color: ${Colors.GRAY};
    text-decoration: none;
    position: relative;
    outline: none;
    cursor: pointer;
    font-weight: 400;

    &::before {
      position: absolute;
      bottom: -1px;
      height: 1px;
      width: 100%;
      content: "";
      background: rgba(180, 180, 180, 0.7);
      transform: scaleX(0);
      animation: scale-out-x 300ms ease 1 forwards;
    }

    &::after {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      content: "";
      background: rgba(180, 180, 180, 0.15);
      transform: scaleY(0);
      animation: scale-out-y 300ms ease 1 forwards;
      transform-origin: top;
    }

    &:hover::before {
      animation: scale-in-x 300ms ease 1 forwards;
    }
  
    &:visited {
      color: ${Colors.GRAY};
    }
  
    &:focus {
      &::after {
        animation: scale-in-y 300ms ease 1 forwards;
      }
  
      &::before {
        animation: scale-in-x 300ms ease 1 forwards;
      }
    }
`;
