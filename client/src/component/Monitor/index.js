import React from "react";
import styled from "styled-components";
import { transBills } from "../../utils/bill";
import { useAppDispatch, useAppState } from "../../context";

// 진행 화면
const Monitor = () => {
  const { change, bills, log } = useAppState();
  const dispatch = useAppDispatch();
  const clickSubmit = e => {
    dispatch({
      type: "RETURN_CHANGE",
      log: "> 잔돈 반환됨",
      bills: transBills(bills, change),
    });
  };
  return (
    <ScreenWrap className="Monitor">
      <MonitorTitle>자판기 머신</MonitorTitle>
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

const MonitorTitle = styled.h1`
  @media (min-width: 320px) and (max-width: 480px) {
    top: 10px;
    font-size: large;
    font-weight: 600;
    color: #005282;
    position: absolute;
  }
  @media (min-width: 480px) {
    top: 65px;
    font-size: xx-large;
    font-weight: 600;
    position: absolute;
  }
`;
const ChangeScreen = styled.div`
  height: 30px;
  width: 300px;
  line-height: 30px;
  padding-right: 30px;
  box-sizing: border-box;
  text-align: right;
  border-radius: 4px;
  border: 1px solid gray;
`;
const SubmitDiv = styled.div`
  margin-top: 20px;
  height: 30px;
  width: 100px;
  line-height: 30px;
  text-align: center;
  border: 1px solid gray;
  border-radius: 10px;
  cursor: pointer;
`;
const LogScreen = styled.div`
  margin-top: 20px;
  height: 200px;
  width: 300px;
  overflow-y: hidden;
  padding: 5px;
  border-radius: 4px;
  box-sizing: border-box;
  border: 1px solid gray;
`;
const ScreenWrap = styled.div`
  @media (min-width: 320px) and (max-width: 480px) {
    position: relative;
    width: 100%;
    height: 300px;
    padding: 20px;
    padding-top: 50px;
    border: 10px solid red;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
  }
  @media (min-width: 480px) {
    position: relative;
    width: 340px;
    height: 800px;
    padding: 20px;
    border: 10px solid black;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 0px 10px 10px 0px;
  }
`;
export default Monitor;
