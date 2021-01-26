import styled from "styled-components";
import db from "../../../db.json";

export const FooterWrapper = styled.footer`
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 27.5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  img {
    width: 58px;
    margin: 0px 23px;
    justify-content: flex-start;
  }
  a {
    color: white;
    text-decoration: none;
    transition: 0.3s;
    &:hover,
    &:focus {
      opacity: 0.5;
    }
    span {
      text-decoration: underline;
    }
  }
`;
