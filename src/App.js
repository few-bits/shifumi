import React, { useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Game from './components/Game';
import styles from './app.module.css';
import { LAYERS, BASE_LEVEL } from './constants';

const Page = ({ offset, gradient }) => (
  <>
    <ParallaxLayer offset={offset}>
      <div className={`${styles.stage} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text} ${styles.layer}`} offset={offset} speed={0.3}>
      <span>{LAYERS[offset]}</span>
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
    <div className={styles.App}>
      <Parallax
        className={styles.parallax}
        ref={parallax}
        pages={3}
        style={{
          overflow: 'hidden',
          top: 0,
          left: 0
        }}
      >
        <Page offset={0} gradient="cosmos" />
        <Page offset={1} gradient="sky" />
        <Page offset={2} gradient="earth" />
      </Parallax>
      <Game scrollTo={scrollTo} />
    </div>
  );
}

export default App;
