import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ImageOne from "../../assets/img 01.svg";
import H1 from "../../components/Title";
import {
  Container,
  Image,
  ContainterItens,
  InputLabel,
  Input,
  Button,
} from "./styles";

function App() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();
  const inputRequest = useRef();
  const inputName = useRef();

  async function addNewOrder() {
    const { data: newOrder } = await axios.post(
      "http://localhost:3001/orders",
      {
        clientOrder: inputRequest.current.value,
        clientName: inputName.current.value,
      }
    );
    setOrders([...orders, newOrder]);

    history.push("/pedidos");
  }

  return (
    <Container>
      <Image alt="imagem-pedido" src={ImageOne} />
      <ContainterItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputRequest} placeholder="1 Coca-Cola, 1-X Salada"></Input>

        <InputLabel>Nome do cliente</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainterItens>
    </Container>
  );
}

export default App;
