import "./App.css";
import { useState, useEffect, useRef } from "react";
import { Wallet, Items, Monitor } from "./component";
import { billList, itemList } from "./data";
import { transBills } from "./utils/bill";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
function App() {
  const mounted = useRef(false); // componentDidUpdate 위해 선언
  const [clickedBill, setClickedBill] = useState(-1);
  const [change, setChange] = useState(0);
  const [bills, setBills] = useState(billList);
  const [items, setItems] = useState(itemList);
  const [log, setLog] = useState([]);

  // componentDidMount
  useEffect(() => {
    console.log("mount");
  }, []);

  // componentDidUpdate
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      setTimeout(() => {
        setChange(0);
        setClickedBill(-1);
        setBills(transBills(bills, change));
        setLog(["잔돈 반환됨", ...log]);
      }, 2000);
    }
  }, [items]);

  const onChange = (val, clickedWon, newBills) => {
    setChange(val);
    setClickedBill(clickedWon);
    setBills(newBills);
  };
  const onClickItem = price => {
    if (mounted.current) return;
    setChange(change - price);
  };

  const onLog = message => {
    setLog([message, ...log]);
  };
  return (
    <Container className="App">
      <Items
        change={change}
        bills={bills}
        items={items}
        onClick={onClickItem}
        onLog={onLog}
        setItems={setItems}
      ></Items>
      <Monitor
        change={change}
        onChange={onChange}
        onLog={onLog}
        log={log}
        bills={bills}
      ></Monitor>
      <Wallet
        change={change}
        bills={bills}
        clicked={clickedBill}
        onLog={onLog}
        onChange={onChange}
      ></Wallet>
    </Container>
  );
}
export default App;
