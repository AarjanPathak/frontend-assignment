import React from 'react'
import Results from "../../components/Results"

function page(props) {
    const searchInput = props.searchParams.search;
  return (
    <div>
        <Results searchInput = {searchInput}/>
    </div>
  )
}

export async function getServerSideProps({context}){
    const param1 = context.search;
    return {
        props: {
            search: param1,
        }
    }
}


export default page
