import React, { useState } from "react";
import ImageOne from "./assets/img 01.svg";
import Trash from "./assets/trash.svg";
import {
  Container,
  H1,
  Image,
  ContainterItens,
  InputLabel,
  Input,
  Button,
  Request,
} from "./styles";

function App() {
  const [orders, setOrders] = useState([]);
  const [request, setRequest] = useState();
  const [name, setName] = useState();

  function addNewOrder() {
    setOrders([...orders, { id: Math.random(), request, name }]);
  }

  function changeInputOrder(event) {
    setRequest(event.target.value);
  }

  function changeInputName(event) {
    setName(event.target.value);
  }

  return (
    <Container>
      <Image alt="imagem-pedido" src={ImageOne} />
      <ContainterItens>
        <H1>Faça seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input
          onChange={changeInputOrder}
          placeholder="1 Coca-Cola, 1-X Salada"
        ></Input>

        <InputLabel>Nome do cliente</InputLabel>
        <Input onChange={changeInputName} placeholder="Nome"></Input>

        <Button onClick={addNewOrder}>Novo Pedido</Button>

        <ul>
          {orders.map((order) => (
            <Request key={order.id}>
              <div className="listOrder">
                <p className=".order-client">{order.clientOrder}</p>
                <p className=".name-client">{order.clientName}</p>
              </div>
              <button>
                <img alt="lata-de-lixo" src={Trash} />
              </button>
            </Request>
          ))}
        </ul>
      </ContainterItens>
    </Container>
  );
}

export default App;
