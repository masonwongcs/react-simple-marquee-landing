import styled from "styled-components";
import isMobile from "ismobilejs";
const userAgent = window.navigator.userAgent;
const ISMOBILE = isMobile(userAgent).any;

export const Header = styled.div`
  margin-bottom: 2rem;
  h3 {
    text-align: center;
    color: #fff;
    font-size: ${ISMOBILE ? "1.6rem" : "3rem"};
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    > .animate-logo {
      margin-right: 12px;
      animation: rotate 2s linear infinite;
      &:hover {
        animation-play-state: paused;
      }
    }
    @keyframes rotate {
      to {
        transform: rotate(-360deg);
      }
    }
  }
  p {
    margin-top: 0;
    text-align: center;
    color: #eee;
    font-size: ${ISMOBILE ? "12px" : "16px"};
  }
`;

export const ButtonWrapper = styled.div`
  margin: 2rem auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  > a {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 8px;
    font-size: 14px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    > svg {
      margin-right: 8px;
    }
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const ViewOnGithub = styled.a`
  background-color: #000;
  color: #fff;
`;

export const ViewOnNpm = styled.a`
  background-color: #cc3534;
  color: #fff;
`;

export const Code = styled.code`
  background-color: #333;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  color: #fff;
  padding: ${ISMOBILE ? "1rem" : "1rem 2rem"};
  border-radius: 8px;
  margin: auto;
`;

export const Browser = styled.div`
  width: ${ISMOBILE ? "90vw" : "600px"};
  height: 400px;
  background-color: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  margin: 3rem auto auto;
  overflow: hidden;
  .browser-header {
    height: 30px;
    background: linear-gradient(to bottom, #fefefe, #eee);
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    padding: 0 12px;
    display: flex;
    align-items: center;
    .dot {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      margin-right: 8px;
      &.red {
        background-color: #ed655a;
      }
      &.yellow {
        background-color: #e1c04c;
      }
      &.green {
        background-color: #70bb46;
      }
    }
  }
  .browser-container {
    padding: 1rem;
    box-sizing: border-box;
    .block-wrapper {
      display: flex;
      align-item: center;
      margin-bottom: 0.4rem;
    }
    .block {
      background-color: #ececec;
      &.small {
        margin-right: 0.5rem;
        flex: 1 1 30%;
        height: 80px;
      }
      &.large {
        flex: 1 1 70%;
        height: 80px;
      }
      &.line {
        height: 10px;
        margin-bottom: 0.4rem;
      }
    }
  }
`;

export const Carbon = styled.iframe`
  outline: none;
  width: 580px;
  height: 490px;
  border: 0;
  border-radius: 16px;
  overflow: hidden;
  margin: 2rem auto;
`;

export const Footer = styled.footer`
  margin: 4rem auto;
  color: #eee;
  display: flex;
  align-items: center;
  > a {
    text-decoration: none;
    color: #eee;
    padding: 4px 6px;
    margin: 0 4px;
    box-sizing: border-box;
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 4px;
    display: flex;
    align-items: center;
    > svg {
      margin-right: 4px;
    }
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;
