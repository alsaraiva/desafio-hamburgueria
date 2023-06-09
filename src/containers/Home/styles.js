import styled from "styled-components";

export const Container = styled.div`
  background: black;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

export const Image = styled.img`
  margin-top: 11px;
`;

export const ContainterItens = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: column;
`;

export const InputLabel = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #eeeeee;
  margin-left: 15px;
`;

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  width: 342px;
  height: 58px;
  outline: none;
  padding-left: 15px;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 21px;
  color: #ffffff;
  margin-bottom: 50px;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  background: #d93856;
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-top: 50px;
  text-decoration: none;
  padding: 33px 120px;

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }
`;
