import React, { useState } from "react";
import styled from "styled-components";

const ItemWrap = styled.div`
  display: flex;
  box-sizing: border-box;
  border: 10px solid black;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
`;
const OneItem = styled.div`
  width: 150px;
  .name,
  .price {
    text-align: center;
  }
  .name {
    border: 1px solid black;
    pointer-events: none;
  }
  .select {
    border: 3px solid red;
    pointer-events: auto;
    cursor: pointer;
  }
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const Item = props => {
  const { item, change } = props.info;
  const { onSelect } = props;
  return (
    <OneItem>
      <div
        className={"name" + (change >= item.price ? " select" : "")}
        onClick={e => {
          onSelect(item.price, item.name, item.count);
        }}
      >
        {item.name}
      </div>
      <div className="price">{item.price}</div>
    </OneItem>
  );
};
// 상품 화면
const Items = props => {
  const { change, onClick, onLog } = props;
  const [items, setItems] = useState([
    { name: "콜라", price: 500, count: 3 },
    { name: "사이다", price: 1000, count: 3 },
    { name: "콜라", price: 800, count: 3 },
    { name: "사이다", price: 500, count: 3 },
    { name: "콜라", price: 500, count: 3 },
    { name: "사이다", price: 500, count: 3 },
    { name: "사이다", price: 500, count: 3 },
    { name: "사이다", price: 500, count: 3 },
  ]);

  const selectItem = async (price, name, count) => {
    if (count === 0) {
      onLog(`${name} 재고가 없음`);
      return;
    }
    onLog(`${name}가 선택됨`);
    onClick(price);
    setItems(
      items.map(item => {
        if (item.name === name) return { name, price, count: item.count - 1 };
        else return item;
      }),
    );
  };

  return (
    <ItemWrap className="items">
      {items.map((item, idx) => (
        <Item key={idx} info={{ item, change }} onSelect={selectItem}></Item>
      ))}
    </ItemWrap>
  );
};

export default Items;
