import styled from "styled-components";

export const TodosBottom = styled.div`
  display: flex;
  max-width: 600px;
  width: 100%;
  align-items: center;
  padding: 10px;
  justify-content: space-between;

  .bottom__list {
    margin: 0 auto;
  }
  button {
    background-color: white;
    padding: 5px;
    border: none;
    cursor: pointer;
  }

  .clear {
    width: 130px;
  }

  .active {
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    .bottom__list {
      margin: 10px auto;
    }
  }
`;
