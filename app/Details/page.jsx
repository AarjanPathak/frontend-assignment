
import React from 'react'
import Detail from "../../components/Detail"

const page = (props) => {    

   const name = props.searchParams.name;
   const artist = props.searchParams.artist;

    return (
        <div>
            <Detail name = {name} artist = {artist}></Detail>
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