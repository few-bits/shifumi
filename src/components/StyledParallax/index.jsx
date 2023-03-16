import React from 'react';
import styled from 'styled-components';
import { Parallax as P, ParallaxLayer as PL } from '@react-spring/parallax';

const CustomParallax = React.forwardRef(({ className, children, ...rest }, ref) => {
    return (
        <P className={className} {...rest} ref={ref}>{children}</P>
    )
})

const CustomParallaxLayer = React.forwardRef(({ className, children, ...rest }, ref) => {
    return (<PL className={className} {...rest} ref={ref}>{children}</PL>)
})

const Parallax = styled(CustomParallax)`
    overflow: hidden !important;
    top: 0;
    left: 0;
`;

const ParallaxLayer = styled(CustomParallaxLayer)`
    opacity: ${props => props.opacity || 1};
`;

export { Parallax, ParallaxLayer };