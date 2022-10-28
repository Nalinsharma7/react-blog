import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { firestore } from '../firebase';

function PostDetail() {

  const [post,setpost] = useState({});
  const postId = useParams();

  useEffect(() => {
    firestore.collection('posts').doc(postId).get().then((snapshot)=>{
      console.log('snapshot',snapshot.data());
      setpost(snapshot.data());
    })
  },[])

  return (
    <div className='post-detail'>
      <h1>PostDetail</h1>
      <p>{post.content}</p>
      </div>
  )
}

export default PostDetail