"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import styles from "../styles/home.module.css"
import axios from "axios"
import Row from "./Row"

function Home() {     
    const TopAlbumsUrl = "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=disco&api_key=0dcdb5c029ca6f08b0396eb697a2c615&format=json"
    
    const [albums, setAlbums] = useState([])
    useEffect(()=>{
      axios.get(TopAlbumsUrl)
        .then(request=>{
          setAlbums(request.data.albums.album)
        })
    }, [TopAlbumsUrl])

    return (
        <div className={styles.main}>
          <h1 className={styles.header}>Trending Albums</h1>
          <div className={styles.albums}>
            {albums.map((album,i)=>{
              return(
                <Row
                    key={i}
                    image = {album?.image[2]["#text"]}
                    name = {album?.name}
                    artist = {album?.artist?.name}
                />
              )
            })}
          </div>
        </div>
    )
}

export default Home
