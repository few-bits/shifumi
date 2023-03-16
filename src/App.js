import React, { useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import Game from './components/Game';
import styles from './app.module.css';
import { LAYERS, BASE_LEVEL } from './constants';

const Page = ({ offset, gradient }) => (
  <>
    <ParallaxLayer offset={1.2} speed={0.5} style={{ opacity: 0.5 }}>
      <img src="./Cloud_3.png" style={{ display: 'block', width: '350px', marginLeft: '10%', height: '150px' }} />
      <img src="./Cloud_4.png" style={{ display: 'block', width: '450px', marginLeft: '0%', height: '150px' }} />
    </ParallaxLayer>

    <ParallaxLayer offset={1.3} speed={0.5} style={{ opacity: 0.6 }}>
      <img src="./Cloud_1.png" style={{ display: 'block', width: '450px', marginLeft: '50%', height: '150px', top: 0 }} />
      <img src="./Cloud_2.png" style={{ display: 'block', width: '350px', marginLeft: '10%', height: '150px', top: 0 }} />
    </ParallaxLayer>

    <ParallaxLayer offset={1.9} speed={0.5} style={{ opacity: 0.7 }}>
      <img src="./Cloud_5.png" style={{ display: 'block', width: '850px', marginLeft: '5%', height: '150px', top: 0 }} />
      <img src="./Cloud_5.png" style={{ display: 'block', width: '650px', marginLeft: '10%', height: '150px', top: 0 }} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset}>
      <div className={`${styles.stage} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.text} ${styles.layer}`} offset={offset} speed={0.3}>
      <span>{LAYERS[offset]}</span>
    </ParallaxLayer>
    <ParallaxLayer offset={2} speed={-0.3} >
      <img src="./Cloud_5.png" style={{ marginLeft: '25%', top: 0 }} />
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

  // useEffect(() => { scrollTo(BASE_LEVEL) }, [])

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
