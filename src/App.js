import React, { useEffect, useRef } from 'react';
import styled, { css, createGlobalStyle } from 'styled-components';

import Game from './components/Game';
import { LAYERS, BASE_LEVEL } from './constants';
import { Parallax, ParallaxLayer } from './components/StyledParallax';

const GlobalStyle = createGlobalStyle`
 body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 }
`;

const AppContainer = styled.div`
  background-color: #253237;
`;

const LayerName = styled(ParallaxLayer)`
  pointer-events: none;
  user-select: none;
  justify-content: start !important;
  font-size: 300px;
  color: #545864;
`;

const Stage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  ${(props) => {
    switch (props.gradient) {
      case "cosmos":
        return css`
          background: linear-gradient(to top, rgb(31, 2, 110) 0%, coral 100%);
        `;
      case "sky":
        return css`
          background: linear-gradient(to top, rgb(36, 175, 240) 0%, rgb(31, 2, 110) 100%);
        `;
      default:
        return css`
          background: linear-gradient(to top,  rgb(88, 87, 85) 0%, rgb(36, 175, 240) 100%);
        `;
    }
  }}
`;

const Cloud3 = styled.img`width: 350px; margin-left: 10%; height: 150px;`;
const Cloud4 = styled.img`width: 450px; margin-left: 0%; height: 150px;`;
const Cloud1 = styled.img`width: 450px; margin-left: 50%; height: 150px; top: 0;`;
const Cloud2 = styled.img`width: 350px; margin-left: 10%; height: 150px; top: 0;`;
const Cloud51 = styled.img`width: 550px; margin-left: 5%; height: 150px; top: 0;`;
const Cloud52 = styled.img`width: 650px; margin-left: 10%; height: 150px; top: 0;`;
const Cloud53 = styled.img`margin-left: 25%; top: 0;`;

const Page = ({ offset, gradient }) => (
  <>
    <ParallaxLayer offset={1.2} speed={0.5} opacity={0.5}>
      <Cloud3 src="./Cloud_3.png" />
      <Cloud4 src="./Cloud_4.png" />
    </ParallaxLayer>

    <ParallaxLayer offset={1.3} speed={0.5} opacity={0.6}>
      <Cloud1 src="./Cloud_1.png" />
      <Cloud2 src="./Cloud_2.png" />
    </ParallaxLayer>

    <ParallaxLayer offset={1.9} speed={0.5} opacity={0.7}>
      <Cloud51 src="./Cloud_5.png" />
      <Cloud52 src="./Cloud_5.png" />
    </ParallaxLayer>

    <ParallaxLayer offset={offset}>
      <Stage gradient={gradient} />
    </ParallaxLayer>

    <LayerName offset={offset} speed={0.3}>
      {LAYERS[offset]}
    </LayerName>
    <ParallaxLayer offset={2} speed={-0.3}>
      <Cloud53 src="./Cloud_5.png" />
    </ParallaxLayer>
  </>
)

function App() {
  const parallax = useRef(null);

  const scrollTo = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to);
    }
  }

  useEffect(() => { scrollTo(BASE_LEVEL) }, [])

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Parallax
          ref={parallax}
          pages={3}
        >
          <Page offset={0} gradient="cosmos" />
          <Page offset={1} gradient="sky" />
          <Page offset={2} gradient="earth" />
        </Parallax>
        <Game scrollTo={scrollTo} />
      </AppContainer>
    </>
  );
}

export default App;
