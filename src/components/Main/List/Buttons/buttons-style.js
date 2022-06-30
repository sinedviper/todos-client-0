import styled from "styled-components";

export const Li = styled.li`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d4d4d4;
  border-top: 1px solid #d4d4d4;

  .input {
    margin: 0 0 0 15px;
    padding: 5px;
    span {
      display: none;
      width: 40px;
    }
  }

  .text {
    display: block;
    padding: 6.5px 15px;
    font-size: 25px;
    width: 100%;
    overflow: hidden;
  }

  button {
    background-color: white;
    padding: 5px;
    border: none;
    padding-right: 15px;
    cursor: pointer;

    .icon {
      padding: 0;
      margin: 0;
      font-size: 30px;
      opacity: 0.5;
      transition: color 0.2s ease-in-out;
    }
    .icon:hover {
      color: red;
    }
  }

  @media screen and (max-width: 500px) {
    .text {
      font-size: 20px;
    }
  }
`;
