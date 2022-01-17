import "./App.css";
import { useState, useEffect } from "react";
import { Wallet, Items, Monitor } from "./component";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
const App = () => {
  const [change, setChange] = useState(0);
  const [clickedBill, setClickedBill] = useState(-1);
  const [log, setLog] = useState([]);
  const [bills, setBills] = useState([
    { won: 10000, count: 3 },
    { won: 5000, count: 4 },
    { won: 1000, count: 4 },
    { won: 500, count: 5 },
    { won: 100, count: 3 },
    { won: 50, count: 4 },
    { won: 10, count: 5 },
  ]);

  useEffect(() => {
    setTimeout(() => {
      clickSubmit();
    }, 2000);
  }, [change]);

  const onChange = (val, clickedWon, newBills) => {
    setChange(val);
    setClickedBill(clickedWon);
    setBills(newBills);
  };
  const onClickItem = price => {
    setChange(change - price);
  };
  const clickSubmit = () => {
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
          const result = { won: item.won, count: item.count + parseInt(curChange / item.won) };
          curChange -= item.won * parseInt(curChange / item.won);
          return result;
        } else return item;
      });
  };
  const onLog = message => {
    setLog([message, ...log]);
  };
  return (
    <Container className="App">
      <Items
        change={change}
        onClick={onClickItem}
        onChange={onChange}
        onLog={onLog}
        bills={bills}
      ></Items>
      <Monitor change={change} onChange={onChange} onLog={onLog} log={log} bills={bills}></Monitor>
      <Wallet
        change={change}
        onLog={onLog}
        bills={bills}
        onChange={onChange}
        clicked={clickedBill}
      ></Wallet>
    </Container>
  );
};

export default App;
