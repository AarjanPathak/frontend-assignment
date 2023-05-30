"use client"
import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import styles from "../styles/detail.module.css"

function detail({name, artist}) {
    const AlbumsInfoUrl = `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=0dcdb5c029ca6f08b0396eb697a2c615&artist=${artist}&album=${name}&format=json`
    const [album, setAlbum] = useState([])
    const [tracks, setTracks] = useState([])

   useEffect(()=>{
    async function fetchData(){
        const request = await axios.get(AlbumsInfoUrl)
        setAlbum(
            request.data.album
        )
        setTracks(
            request.data.album.tracks
        )
        return request;
    }
    fetchData();
   }, [AlbumsInfoUrl])

   if (!album || !album.image || album.image.length === 0) {
    return null; // Return null or handle the case when the data is not available yet
  }

    return (
        <div className={styles.container}>
            <div className={styles.main}>

                <div>
                 <img src={album.image[3]['#text']}/>
                </div>

                <div className={styles.info}>
                    <h3 className={styles.artist}>{album?.artist}</h3>
                    <h2 className={styles.name}>{album?.name}</h2>
                    { album.wiki && <p><span className={styles.span}>Release date: </span>{album.wiki.published}</p>} 
                    <p className={styles.listeners}><span className={styles.span}>Listeners: </span>{album.listeners}</p>
                    <div className={styles.text}>
                        { album.wiki && <p>{album.wiki.summary}</p>}
                    </div> 
                </div>

            </div>

            <div className={styles.tracks}>
                <h2>Track List: </h2>
                <br/>
                {tracks && tracks.track && tracks.track.length > 0? (
                    tracks.track.map((item) => (
                    <ul>
                        <li className={styles.listItem}>{item.name}</li>
                    </ul>
                    ))
                ) : (
                    <p>No tracks available.</p>
                )}
            </div>
        </div>
      );
}

export default detail
