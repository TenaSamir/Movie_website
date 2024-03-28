import React from 'react'
import { useParams } from 'react-router-dom'

const SiingleMovie = () => {
    const {id}=useParams();
  return (
    <div>SiingleMovie {id}</div>
  )
}

export default SiingleMovie