import React from 'react'
import { useState } from 'react'
import {firestore} from '../firebase'
import {useFormInput} from '../hooks'



function CreatePost() {

  const title = useFormInput('');
  const content = useFormInput('');
  const subtitle = useFormInput('');

  function handleSubmit(e){
    e.preventDefault();
    console('title',title);
    console('subtitle',subtitle);
    console('content',content);
  
    firestore.collection('posts').add({
      title: title.value,
      subtitle:subtitle.value,
      content:content.value,
      createdAt: new Date(),
    })
  }


  return (
    <div className=''>
      <h1>CreatePost</h1>

      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label>Title</label>
          {/* <input value={title} onChange={(e)=>setTitle(e.target.value)}/> */}
          <input {...title}/>
        </div>

        <div className='form-field'>
          <label>Sub Title</label>
          {/* <input value={subtitle} onChange={(e)=>setSubtitle(e.target.value)}/> */}
          <input {...subtitle}/>
        </div>

        <div className='form-field'>
          <label>Contect</label>
          {/* <textarea value={content} onChange={(e)=> setContent(e.target.value)}></textarea> */}
          <input {...content}/>
        </div>

        <button className='create-post-btn'>Create Post</button>
      </form>
    
    </div>
  )
}

export default CreatePost