import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  text-align: center;
  padding: 300px 0 50px 0;

  h1 {
    font-weight: 100;
    font-size: 80px;
    color: #4bd39f;
  }
  @media screen and (max-width: 500px) {
    h1 {
      font-size: 60px;
    }
  }
`;
