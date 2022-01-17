import "./App.css";
import { useState } from "react";
import { Wallet, Items, Monitor } from "./component";
const App = () => {
    const [change, setChange] = useState(1000);
    const onChange = (val) => {
        setChange(val);
    };
    return (
        <div className="App">
            <Items></Items>
            <Monitor change={change} onChange={onChange}></Monitor>
            <Wallet></Wallet>
        </div>
    );
};

export default App;
