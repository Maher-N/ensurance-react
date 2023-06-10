import { useNavigate } from 'react-router-dom';
import styles from './style.module.css'

import React from 'react'

const IButton = (props) => {
  const navigate = useNavigate();

  const navigateToRequest = (e)=>{
    e.preventDefault()
    navigate("/comparison")
  }
  const {text} = props
  return (
     <button onClick={(e)=>
      navigateToRequest(e)
    } className={styles.Ibutton}>{text}</button>
  )
}

export default IButton