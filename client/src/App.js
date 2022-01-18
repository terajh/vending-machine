import "./App.css";
import { useState, useEffect, useRef } from "react";
import { Wallet, Items, Monitor } from "./component";
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
    <Container className="App">
      <Items></Items>
      <Monitor></Monitor>
      <Wallet></Wallet>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
export default App;
