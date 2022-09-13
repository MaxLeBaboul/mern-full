import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAppContext } from '../context'

const Single = () => {
  const {posts} =useAppContext()
  const params = useLocation()
  const post = posts.find(post => post._id === params?.state?.id)
  
  return (
    <div className="mt-5 p-5">
      <Link to="/">Back</Link>
      <h1>{post?.title}</h1>
      <p>{post?.content}</p>
    </div>
  )
}

export default Single