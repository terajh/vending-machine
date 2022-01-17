import React, { useState } from "react";
import styled from "styled-components";
const LogScreen = styled.div`
    margin-top: 20px;
    overflow-y: hidden;
`;
const ChangeScreen = styled.div``;

const ScreenWrap = styled.div`
    width: 300px;
`;
// 진행 화면
const Monitor = (props) => {
    const changes = props.change;
    // props.onChange(1000);
    return (
        <ScreenWrap className="Monitor">
            <ChangeScreen className="changes">{changes}원</ChangeScreen>
            <div>반환</div>
            <LogScreen>스크린</LogScreen>
        </ScreenWrap>
    );
};

export default Monitor;
