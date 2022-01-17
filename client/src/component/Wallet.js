import React, { useState } from "react";
import styled from "styled-components";

const BillBlock = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Bill = (props) => {
    return (
        <BillBlock>
            <div>{props.info.won}원</div>
            <div>{props.info.count}개</div>
        </BillBlock>
    );
};
// 지갑 화면
const Wallet = () => {
    const [bills, setBills] = useState([
        { won: 10, count: 0 },
        { won: 50, count: 0 },
        { won: 100, count: 0 },
        { won: 500, count: 0 },
        { won: 1000, count: 0 },
        { won: 5000, count: 0 },
        { won: 10000, count: 0 },
    ]);
    return (
        <div className="wallet">
            {bills.map((item, idx) => {
                return <Bill key={idx} info={item}></Bill>;
            })}
            <div>
                {bills.reduce((acc, cur) => {
                    return acc + cur.won * cur.count;
                }, 0)}
                원
            </div>
        </div>
    );
};

export default Wallet;
