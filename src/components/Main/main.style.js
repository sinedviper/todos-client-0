import styled from "styled-components";

export const Mainn = styled.main`
  width: 100%;
  padding: 0 20px 100px;
`;

export const CardTodos = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  background-color: white;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  border: none;
  padding-left: 60px;
  padding-right: 20px;
  font-size: 25px;
  font-weight: 300;
  border-radius: 2px;

  &:focus {
    color: #202020;
    outline: none;
  }

  &::placeholder {
    color: #d0d0d0;
  }
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

export const Arrow = styled.span`
  position: absolute;
  opacity: 0.5;
  left: 5px;
  top: 5px;
`;

export const Bottom = styled.div`
  position: absolute;
  height: 30px;
  width: 100%;
  padding: 0 5px;

  .block__two {
    padding: 0 5px;
  }

  .first__list,
  .second__list {
    position: relative;
    top: -2px;
    z-index: -1;
    max-width: 590px;
    margin: 0 auto;
    width: 100%;
    height: 10px;
    border: 0.1px solid #d4d4d4;
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
    border-radius: 0 0 2px 2px;
    background-color: white;
  }
  .second__list {
    max-width: 580px;
    width: 100%;
    top: -4px;
    z-index: -2;
  }
`;
