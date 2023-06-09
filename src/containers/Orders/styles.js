import styled from "styled-components";

export const Container = styled.div`
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 100vh;
`;

export const Image = styled.img`
  margin-top: 11px;
`;

export const ContainterItens = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  background: rgba(255, 255, 255, 0.14);
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-top: 50px;
  text-decoration: none;
  padding: 33px 145px;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;

export const Request = styled.li`
  width: 342px;
  height: 101px;
  background: rgba(255, 255, 255, 0.25);
  color: #ffffff;
  border-radius: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 25px;
  margin-top: 20px;

  button {
    background: none;
    border: none;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
    &:active {
      opacity: 0.5;
    }
  }

  .listOrder {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
  }
  .order-client {
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: -0.408px;
    color: #ffffff;
  }

  .name-client {
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;
    color: #ffffff;
  }

  img {
    width: 24px;
    height: 28px;
  }
`;
