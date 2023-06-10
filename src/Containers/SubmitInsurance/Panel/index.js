import PanelTitle from './PanelTitle'
import styles from './style.module.css'
import React from 'react'

const Panel = ({title,children}) => {
  return (
    <div className={styles.panel}>
        <PanelTitle name={title} />
        {children}
    </div>
  )
}

export default Panel
