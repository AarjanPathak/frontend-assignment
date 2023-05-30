"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Row from './Row'
import styles from "../styles/home.module.css"

function Results({searchInput}) {

    const [albums, setAlbums] = useState([])
    const SearchAlbumsUrl = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${searchInput}&api_key=0dcdb5c029ca6f08b0396eb697a2c615&format=json`
    useEffect(()=>{
      axios.get(SearchAlbumsUrl)
        .then(request=>{
          setAlbums(request.data.results.albummatches.album)
        })
    }, [SearchAlbumsUrl])
    
  return (
    <div className={styles.main}>
        <h1>Search Results</h1>
        <div className={styles.albums}>
        {albums.map((album, i)=>{
            return(
            <Row
              key={i}
              image = {album?.image[2]["#text"]}
              name = {album?.name}
              artist = {album?.artist}
            />
        )
      })}
    </div>
  </div>
  )
}

export default Results
