"use client"

import { useEffect, useState } from "react";
import axios from "axios";
import styles from '../styles/page.module.css';

const page = () => {

  const [albums, setAlbums] = useState([])

  const TopAlbumsUrl = "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=0dcdb5c029ca6f08b0396eb697a2c615&format=json"

  useEffect(()=>{
    axios.get(TopAlbumsUrl)
      .then(request=>{
        setAlbums(request.data.albums.album)
      })
  }, [TopAlbumsUrl])

  return (
    <div className={styles.main}>
      <h1>Trending Albums</h1>
      <div className={styles.albums}>
        {albums.map((album)=>{
          return(
            <div className={styles.info}>
               <img key = {album.url} src = {album?.image[2]["#text"]}/>
               <h2 className={styles.title}>{album?.name}</h2>
               <h4 className={styles.artist}>{album?.artist?.name}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default page

