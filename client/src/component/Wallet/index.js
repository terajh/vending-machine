import React, { useState } from "react";
import styled from "styled-components";

const BillWrap = styled.div`
  width: 20%;
  box-sizing: border-box;
  border: 1px solid black;
  margin-left: 10px;
`;
const BillBlock = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 10px;
`;
const BillWon = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 10px;
`;
const SelectedBillWon = styled.div`
  border: 1px solid red;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 10px;
`;
const BillResult = styled.div`
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-top: 1px solid black;
`;
const BillCount = styled.div`
  border: 1px solid black;
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 10px;
`;
const Bill = props => {
  const { clickBill, clicked, info } = props;
  return (
    <BillBlock>
      {clicked === info.item.won ? (
        <SelectedBillWon onClick={e => clickBill(info)}>
          {info.item.won}원
        </SelectedBillWon>
      ) : (
        <BillWon onClick={e => clickBill(info)}>{info.item.won}원</BillWon>
      )}
      <BillCount>{info.item.count}개</BillCount>
    </BillBlock>
  );
};
// 지갑 화면
const Wallet = props => {
  const { change, onChange, clicked, bills, onLog } = props;
  const clickBill = info => {
    const clickedValue = info.item.won;
    const clickedCount = info.item.count;
    const clickedIdx = info.idx;

    if (clickedCount <= 0) return;
    bills[clickedIdx].count -= 1;
    onLog(`${clickedValue}이 투입됨`);
    onChange(change + parseInt(clickedValue), clickedValue, bills);
  };
  return (
    <BillWrap className="wallet">
      {bills.map((item, idx) => {
        return (
          <Bill
            key={idx}
            info={{ item, idx }}
            clickBill={clickBill}
            clicked={clicked}
          ></Bill>
        );
      })}
      <BillResult>
        {bills.reduce((acc, cur) => {
          return acc + cur.won * cur.count;
        }, 0)}
        원
      </BillResult>
    </BillWrap>
  );
};

export default Wallet;
