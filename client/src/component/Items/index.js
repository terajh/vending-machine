import React, { useState } from "react";
import styled from "styled-components";

const ItemWrap = styled.div`
  display: flex;
  box-sizing: border-box;
  border: 10px solid black;
  flex-wrap: wrap;
  width: 50%;
  align-content: flex-start;
  justify-content: center;
`;
const OneItem = styled.div`
  width: 150px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 15px;
  box-sizing: border-box;
  margin-bottom: 15px;
`;
const ItemName = styled.div`
  width: 150px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  border: 1px solid black;
  box-sizing: border-box;
  pointer-events: none;
`;
const SelectedItemName = styled.div`
  width: 150px;
  height: 35px;
  line-height: 35px;

  text-align: center;
  border: 3px solid red;
  pointer-events: auto;
  box-sizing: border-box;
  cursor: pointer;
`;
const ItemPrice = styled.div`
  text-align: center;
`;

const Item = props => {
  const { change } = props.info;
  const { price, name, count } = props.info.item;
  const { onSelect } = props;
  const onClickItem = () => {
    onSelect(price, name, count);
  };
  return (
    <OneItem>
      {change >= price && count > 0 ? (
        <SelectedItemName onClick={onClickItem}>{name}</SelectedItemName>
      ) : (
        <ItemName onClick={onClickItem}>{name}</ItemName>
      )}
      <ItemPrice>{price}</ItemPrice>
    </OneItem>
  );
};
// 상품 화면
const Items = props => {
  const { change, onClick, onLog, items, setItems } = props;

  const selectItem = (price, name, count) => {
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
