import styles from './style.module.css';

import React from 'react'
import ILogo from '../ILogo';
import NavActions from './NavActions';

const TopNav = () => {
  return (
    <nav className={styles.TopNav}>
        <ILogo/>
        <NavActions/>
    </nav>
    )
}

export default TopNav