import React, { useState } from "react";
import styled from "styled-components";

const ChangeScreen = styled.div`
  height: 30px;
  line-height: 30px;
  padding-right: 30px;
  box-sizing: border-box;
  text-align: right;
  border: 1px solid black;
`;
const SubmitDiv = styled.div`
  margin-top: 20px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid black;
`;
const LogScreen = styled.div`
  margin-top: 20px;
  height: 150px;
  overflow-y: scroll;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid black;
`;
const ScreenWrap = styled.div`
  width: 30%;
  height: 800px;
  padding: 20px;
  border: 10px solid black;
  box-sizing: border-box;
`;

// 진행 화면
const Monitor = props => {
  const { change, log, onChange, bills, onLog } = props;
  const clickSubmit = e => {
    onChange(0, -1, transBills(bills, change));
    onLog("잔돈 반환됨");
  };
  const transBills = (bills, change) => {
    let curChange = change;
    return bills
      .sort((a, b) => {
        return b.won - a.won;
      })
      .map(item => {
        if (curChange > 0 && curChange >= item.won) {
          const result = {
            won: item.won,
            count: item.count + parseInt(curChange / item.won),
          };
          curChange -= item.won * parseInt(curChange / item.won);
          return result;
        } else return item;
      });
  };
  return (
    <ScreenWrap className="Monitor">
      <ChangeScreen className="changes">{change} 원</ChangeScreen>
      <SubmitDiv onClick={clickSubmit}>반환</SubmitDiv>
      <LogScreen>
        {log.map((item, idx) => {
          return <div key={idx}>{item}</div>;
        })}
      </LogScreen>
    </ScreenWrap>
  );
};

export default Monitor;
