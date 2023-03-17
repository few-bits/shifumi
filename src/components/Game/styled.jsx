import styled, { css } from 'styled-components';
import circle from '../Choose/img/circle.png';
import rock from '../Choose/img/rock.png';
import paper from '../Choose/img/paper.png';
import scissors from '../Choose/img/scissors.png';

export const Text = styled.div`
    pointer-events: none;
    user-select: none;
    font-size: 150%;
`;

export const Center = styled.div`
    width: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
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

export const Info = styled.div`
    display: flex;
    justify-content: center;
`;

export const Selection = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-size: 100%, 50%;
    background-position: center, center;
    background-repeat: no-repeat, no-repeat;
    opacity: 0.8;
    border-radius: 50%;
    transition: all 0.5s;
    ${(props) => {
    switch (props.value) {
        case "rock":
            return css`
                background-image: url('${circle}'), url('${rock}');
                background-color: #fff;
            `;
        case "paper":
            return css`
                background-image: url('${circle}'), url('${paper}');
                background-color: #fff;
            `;
        case "scissors":
            return css`
                background-image: url('${circle}'), url('${scissors}');
                background-color: #fff;
            `;
        default:
            return css`
                background-image: url('${circle}');
            `;
    }}}

    &:before {
        display: block;
        content: "${(props) => props.participant}";
        position: absolute;
        top: -50px;
        user-select: none;
        font-size: 250%;

        ${(props) => {
            if (props.participant === props.winner) {
                return css`
                    text-shadow: 0 3px 5px #c4b59d, 0px -2px 1px #fff;
                `
            }
        }}
    }

    
`;
