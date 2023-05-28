import React from 'react'
import styles from '../styles/nav.module.css'
import logo from '../public/icon-a.png'
import Image from 'next/image'

function Nav() {
  return (
    <div className={styles.nav}>
      <Image className={styles.logo}
        src = {logo}
        width = "350"
        height= "300"
      />
      
      <div>
        <input 
            className={styles.input}
            type="text"
            placeholder="Search..."
        />
      </div>
      
    </div>
  )
}

export default Nav
