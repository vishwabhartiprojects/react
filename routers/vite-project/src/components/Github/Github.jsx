import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
  const data = useLoaderData()
  console.log(data)
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://freetestapi.com/api/v1/actors/1')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
  return (
    <>
      <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Name: {data.name}</div>
      <img src={data.image} alt={data.name} width={300} />
    </>
  )
}

export default Github

export const githubInfoLoader = async () =>{
  const res = await fetch('https://freetestapi.com/api/v1/actors/1')
  return res.json()
}