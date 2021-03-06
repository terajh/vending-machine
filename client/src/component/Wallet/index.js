import React from "react";
import styled from "styled-components";
import { useAppDispatch, useAppState } from "../../context";

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
  const { change, clickedBill, bills } = useAppState();
  const dispatch = useAppDispatch();
  const clickBill = info => {
    const clickedValue = info.item.won;
    const clickedCount = info.item.count;
    if (clickedCount <= 0) return;
    dispatch({
      type: "SELECTED_BILL",
      change: change + parseInt(clickedValue),
      clickedIdx: info.idx,
      clickedBill: info.item.won,
      log: `> ${clickedValue}이 투입됨`,
    });
  };
  return (
    <BillWrap className="wallet">
      {bills.map((item, idx) => {
        return (
          <Bill
            key={idx}
            info={{ item, idx }}
            clickBill={clickBill}
            clicked={clickedBill}
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

const BillWrap = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    padding-top: 30px;
    box-sizing: border-box;
    border: 1px solid red;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: flex-start;
  }
  @media (min-width: 480px) {
    width: 250px;
    height: 800px;
    padding-top: 30px;
    box-sizing: border-box;
    border: 1px solid gray;
    margin-left: 10px;
    background: rgba(0, 0, 0, 0.5);
  }
`;
const BillBlock = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 10px;
  }
  @media (min-width: 480px) {
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
  }
`;
const BillWon = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: xx-small;
    border: 1px solid gray;
    width: 50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 10px;
  }
  @media (min-width: 480px) {
    border: 1px solid gray;
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 10px;
  }

  cursor: pointer;
  :hover {
    background: rgba(0, 150, 255, 0.5);
  }
`;
const SelectedBillWon = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    font-size: xx-small;
    border: 1px solid red;
    width: 50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 10px;
  }
  @media (min-width: 480px) {
    border: 1px solid red;
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 10px;
  }
`;
const BillResult = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    align-self: flex-start;
    width: 100%;
  }
  text-align: center;
  height: 40px;
  line-height: 40px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  margin-top: 30px;
  background: rgba(200, 200, 255, 0.5);
`;
const BillCount = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    border: 1px solid gray;
    font-size: xx-small;
    width: 50px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border-radius: 10px;
  }
  @media (min-width: 480px) {
    border: 1px solid gray;
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 10px;
  }
`;

export default Wallet;
