import styles from "../styles/row.module.css"
import Link from "next/link"

function Row({image, name, artist,}){
  return (
    <Link
    href={{
      pathname: '../Details',
      query: {
        name: name,
        artist: artist,
      }
    }}
    >
      <div className={styles.albums}>
          <div className={styles.info}>
            <img src = {image} alt="logo"/>
            <h2 className={styles.title}>{name}</h2>
            <h4 className={styles.artist}>{artist}</h4>
          </div>
      </div>
    </Link>
  )
}

export default Row
