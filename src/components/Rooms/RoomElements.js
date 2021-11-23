import styled from "styled-components";

export const Section = styled.section`
        display: grid;
        gap: 1rem 2rem;
        max-width: 25rem;
`;

export const Img = styled.img`
    width: 395px;
    height: 269px;
    left: 50px;
    top: 209px;
    border-radius: 24px;
`;

export const Name = styled.div`
    display: flex;
    width: 181px;
    height: 17px;
    left: 150px;
    top: 499px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */


    /* Gray 3 */

    color: #828282;
`;

export const Star = styled.div`
    /* position: relative; */
    width: 32px;
    height: 17px;
    left: 370px;
    top: -30px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */


    color: #4F4F4F;
`;

export const Description = styled.div`
    /* position: relative; */
    width: 308px;
    height: 20px;
    left: 15px;
    top: -25px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    text-align: right;

    color: #333333;
`;
