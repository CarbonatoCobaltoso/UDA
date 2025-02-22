import React from 'react';
import clsx from 'clsx';
import { animated, Spring } from 'react-spring';
import { Alto, BassoDestra, BassoSinsitra } from '../public/images/logoscienze/index';
import styles from './loghi.module.scss';

interface LogoProps {
  otherClass?: string,
  animation: boolean,
  other: any,
}

export default function LogoScienze({ otherClass, animation, ...other }:LogoProps) {
  return <>
    <div className={styles.padding} {...other}>
      <div className={styles.scienze}>
        <Alto />
        <BassoDestra />
        <BassoSinsitra />
      </div>
    </div>
    <Spring from={{ transform: 'rotate(0deg)' }} to={{ transform: animation ? 'rotate(10deg)' : 'rotate(0deg)' }}>
      {(props) => <animated.div className={clsx(styles.padding, styles.absright)} style={props}>
        <div className={styles.scienze}>
          <Alto />
          <BassoDestra />
          <BassoSinsitra />
        </div>
      </animated.div>}
    </Spring>
  </>;
}
