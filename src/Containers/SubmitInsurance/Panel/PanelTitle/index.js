import styles from './style.module.css'

import React from 'react'

const PanelTitle = ({name}) => {
  return (
    <div>
    { name &&   <img src="/panelheader.svg"  alt='request form image'/>}
        <span className={styles.title}>
           {name}
        </span>
    </div>
  )
}

export default PanelTitle