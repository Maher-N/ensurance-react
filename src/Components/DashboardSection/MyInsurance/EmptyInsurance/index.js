import React from 'react'
import styles from './style.module.css'

const Empty = () => {
  return (
    <div className={` ${styles.flex} text-center` }>
        <img src='/no-insurance.png'  alt="no insurance yet " />
        <h4>You have no insurance yet</h4>
    </div>
  )
}

export default Empty