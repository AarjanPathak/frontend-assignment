"use client"
import styles from '../styles/nav.module.css'
import logo from '../public/icon-a.png'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

function Nav() {

  const[search, setSearch] = useState('')
  return (
    <div className={styles.nav}>
      <Link href = "/">
      <Image className={styles.logo}
        src = {logo}
        width = "350"
        height= "300"
        alt='logo'
      />
      </Link>

      <div className={styles.search}>
        <input 
            onChange = {(e) => setSearch(e.target.value)}
            className={styles.input}
            type="text"
            placeholder="Artist/Album name..."
        />
        <Link
          href ={{
            pathname: "../Search",
            query: {
              search : search,
            }
          }}
        >
        <button className={styles.button}>Search</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Nav
