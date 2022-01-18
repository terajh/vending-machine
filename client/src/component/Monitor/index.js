import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { transBills } from "../../utils/bill";
import { useAppDispatch, useAppState } from "../../context";

// 진행 화면
const Monitor = props => {
  const { change, bills, log } = useAppState();
  const dispatch = useAppDispatch();
  const clickSubmit = e => {
    dispatch({
      type: "RETURN_CHANGE",
      log: "잔돈 반환됨",
      bills: transBills(bills, change),
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
export default Monitor;
