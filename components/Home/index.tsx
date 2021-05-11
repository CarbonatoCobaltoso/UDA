import React, { useEffect, useState, useRef } from 'react';
import {
  Spring, animated, config,
} from 'react-spring';
import useWindowSize from '../../hooks/useWindowSize';
import styles from './styles/Home.module.scss';

let Globe = () => null;
// eslint-disable-next-line global-require
if (typeof window !== 'undefined') Globe = require('react-globe.gl').default;

export default function Home() {
  const [title, setTitle] = useState(false);
  const globeEl = useRef(null);
  const size = useWindowSize();
  useEffect(() => {
    if (size.width < 900 || size.height < 900) alert('VISUALIZZARE IL PROGETTO AD UNA RISOLUZIONE PIÙ ALTA, MINIMO 900x900');
    let to;
    (function check() {
      if (globeEl.current) {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 15;
        globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 1.8 });
      } else {
        to = setTimeout(check, 1000);
      }
    }());
    return () => {
      if (to) {
        clearTimeout(to);
      }
    };
  }, []);
  function TitleOut() {
    setTitle(true);
  }
  return (
    <Spring from={{ bottom: 0, fontSize: 140 - ((size.width / 100) * 1) }} to={{ bottom: title ? size.height / 2 - 50 : 0, fontSize: title ? ((size.width / 100) * 3) : ((size.width / 100) * 5) }} config={config.molasses}>
      {(styless) => <animated.div style={styless} className={styles.home} onClick={() => TitleOut()}>
        <animated.div className={styles.title}>
        IL M
          <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
            width={title ? ((size.width / 100) * 3) : ((size.width / 100) * 5)}
            height={title ? ((size.width / 100) * 3) : ((size.width / 100) * 5)}
            backgroundColor='#EDF0E6'
          />
        NDO CHE VORREI
        </animated.div>
        <div className={styles.earth}>
        </div>
      </animated.div>
      }
    </Spring>
  );
}
