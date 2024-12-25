"use client"

import { client } from '@/sanity/lib/client';
import React, { useEffect, useState } from 'react'

const page = () => {
const [posts,setposts] = useState([])
  const query = `*[_type == "blogs"]`;
  useEffect(()=>{

    client.fetch(query).then((data) => {
      setposts(data)
    }
  ).catch(console.error);
  
},[])
console.log(posts);


  return (
    <div>
    {posts && posts.map((post:{_id:string,blogtitle:string,content:string,blogimage:{asset:{url:string}}}) => (
      <div key={post._id}>
        <h2>{post.blogtitle}</h2>
        <p>{post.content}</p>
        <img src={post.blogimage?.asset.url} alt={post.blogtitle} />
      </div>
    ))}
     
  </div>  )
}

export default page