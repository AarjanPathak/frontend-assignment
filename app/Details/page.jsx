
import React from 'react'

const page = (props) => {    

   const name = props.searchParams.name;
   const artist = props.searchParams.artist;

    return (
        <div>
            <h1>Album Name: {name}</h1>
            <h1>Artist Name: {artist}</h1>
        </div>
    )
};

export async function getServerSideProps({context}){
    const param1 = context.name;
    const param2 = context.artist
    return {
        props: {
            name: param1,
            artist: param2
        }
    }
}

export default page;