import styled from "styled-components";

export const Div = styled.div`
    position: fixed;
    /* position: absolute; */
    width: 488px;
    height: 800px;
    left: -4px;
    top: -10px;
    background: #FFFFFF;
    /* background: black; */
`;

export const Header = styled.div`

    display: flex;
    position: absolute;
    margin-top: 2rem;
    width: 93px;
    height: 15px;
    left: 20px;
    /* top: 16px; */
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    color: #333333;
    /* color: white; */
`;

export const EditSearch = styled.div`
    position: fixed;
    width: 351px;
    height: 113px;
    left: 4.3rem;
    top: 5rem;

    background: #FFFFFF;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
`;

export const Seperator = styled.hr`
    position: absolute;
    width: 351px;
    height: 0px;
    left: 0px;
    top: 3.3rem;

    border: 1px solid #F2F2F2;
`;

export const Input = styled.input`
    position: absolute;
    width: 106px;
    height: 18px;
    /* left: 36px; */
    /* top: 32px; */

    font-family: Mulish;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    border: none;
    /* identical to box height */


    color: #333333;
`;

export const Button = styled.button`
    position: absolute;
    width: 126px;
    height: 48px;
    left: 11.1rem;
    top: 45rem;

    background: rgba(235, 87, 87, 0.9);
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    border: none;
    font-family: Mulish;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    color: #F2F2F2;
`;