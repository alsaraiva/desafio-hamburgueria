import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ImageTwo from "../../assets/img 02.svg";
import Trash from "../../assets/trash.svg";
import H1 from "../../components/Title";

import { Container, Image, ContainterItens, Button, Request } from "./styles";

function Orders() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await axios.get(
        "http://localhost:3001/orders"
      );

      setOrders(newOrders);
    }

    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3001/orders/${orderId}`);
    const newOrders = orders.filter((order) => order.id !== orderId);
    setOrders(newOrders);
  }

  function goBackPage() {
    history.push("/");
  }

  return (
    <Container>
      <Image alt="imagem-pedido" src={ImageTwo} />
      <ContainterItens>
        <H1>Pedidos</H1>

        <ul>
          {orders.map((order) => (
            <Request key={order.id}>
              <div className="listOrder">
                <p className=".order-client">{order.clientOrder}</p>
                <p className=".name-client">{order.clientName}</p>
              </div>
              <button onClick={() => deleteOrder(order.id)}>
                <img alt="lata-de-lixo" src={Trash} />
              </button>
            </Request>
          ))}
        </ul>

        <Button onClick={goBackPage}>Voltar</Button>
      </ContainterItens>
    </Container>
  );
}

export default Orders;
