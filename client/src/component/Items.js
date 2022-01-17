import React, { useState } from "react";
import styled from "styled-components";

const ItemWrap = styled.div`
    display: flex;
    width: 500px;
    flex-wrap: wrap;
`;
const OneItem = styled.div`
    width: 100px;
    height: 40px;
    margin: 5px;
    .name,
    .price {
        text-align: center;
    }
`;

const Item = (props) => {
    return (
        <OneItem>
            <div className="name">{props.item.name}</div>
            <div className="price">{props.item.price}</div>
        </OneItem>
    );
};
// 상품 화면
const Items = () => {
    const [items, setItems] = useState([
        { name: "콜라", price: 500 },
        { name: "사이다", price: 500 },
        { name: "콜라", price: 500 },
        { name: "사이다", price: 500 },
        { name: "콜라", price: 500 },
        { name: "사이다", price: 500 },
    ]);
    return (
        <ItemWrap className="items">
            {items.map((item, idx) => (
                <Item key={idx} item={item}></Item>
            ))}
        </ItemWrap>
    );
};

export default Items;
