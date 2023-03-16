import styled from 'styled-components';

export const Text = styled.div`
    pointer-events: none;
    user-select: none;
    font-size: 250%;
`;

export const PlayAgain = styled.div`
    border: 2px solid #fff;
    margin-top: 10px;
    padding: 5px;
    text-align: center;
    font-size: 150%;
    color:#fff;
    background-color: #fff transparent;

    &:hover {
        background-color: #fff;
        color: #000;
        cursor: pointer;
        transition: all 0.3s;
        position: relative;
    }

    &:active {
        top: 1px;
    }
`;

export const StyledGame = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
`;