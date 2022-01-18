import "./App.css";
import { useState, useEffect, useRef } from "react";
import { Wallet, Items, Monitor, BackGround } from "./component";
import { useAppDispatch, useAppState } from "./context";

import { transBills } from "./utils/bill";
import styled from "styled-components";

function App() {
  const mounted = useRef(false); // componentDidUpdate 위해 선언
  const { change, bills, items } = useAppState();
  const dispatch = useAppDispatch();
  useEffect(() => {
    console.log("mount app");
  }, []);
  // componentDidUpdate
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true; // mount
    } else {
      dispatch({
        type: "TOGGLE_SELECT",
      });
      setTimeout(() => {
        dispatch({
          type: "FINISH_SELECT",
          bills: transBills(bills, change),
        });
        dispatch({
          type: "TOGGLE_SELECT",
        });
      }, 2000);
    }
  }, [items]);

  return (
    <>
      <BackGround></BackGround>
      <Container className="App">
        <Items></Items>
        <Monitor></Monitor>
        <Wallet></Wallet>
      </Container>
    </>
  );
}

const Container = styled.div`
  @media (min-width: 480px) {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 50px;
    color: #fcfcfc;
    font-size: 700;
    min-width: 1200px;
    overflow: hidden;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: small;
    color: #fcfcfc;
    align-items: center;
  }
`;
export default App;
