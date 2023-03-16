import styled, { css } from 'styled-components';
import circle from './img/circle.png';
import rock from './img/rock.png';
import paper from './img/paper.png';
import scissors from './img/scissors.png';

export const ChooseWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const StyledChoose = styled.div`
    position: relative;
    cursor: pointer;
    background-color: #fff transparent;
    margin: 10px;
    border-radius: 50%;
    background-size: 100%, 50%;
    background-position: center, center;
    background-repeat: no-repeat, no-repeat;
    width: 100px;
    height: 100px;

    ${(props) => props.disabled && `cursor: not-allowed;`}
    
    &:active:after {
        ${(props) => props.disabled && css`
            box-shadow: none;
            opacity: 0;
        `}
    }

    ${(props) => {
    switch (props.value) {
        case "rock":
            return css`
                background-image: url(${circle}), url('${rock}');
            `;
        case "paper":
            return css`
                background-image: url('${circle}'), url('${paper}');
            `;
        default:
            return css`
                background-image: url('${circle}'), url('${scissors}');
            `;
    }}}

    &:active {
        top: 1px;
    }

    &:hover {
        background-color: #fff;
        transition: all 0.3s,
    }

    &:after  {
        content: "";
        display: block;
        position: absolute;
        border-radius: 4em;
        left: 0;
        top:0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 0.5s;
        box-shadow: 0 0 10px 40px white;
    }

    &:active:after {
        box-shadow: 0 0 0 0 white;
        position: absolute;
        border-radius: 4em;
        left: 0;
        top:0;
        opacity: 1;
        transition: 0s;
    }
`;