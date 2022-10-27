import {useState} from 'react'


const Form = () => {
  const [title, setTitle]= useState('')
  const [content, setContent]= useState('')
  const [error, setError]= useState('')
  const handleSubmit = async(e)=>{
    e.preventDefault()

    const blog = {title,content }

    const response = await fetch('/api/blogs', {
      method:'POST',
      body: JSON.stringify(blog) ,
      headers:{
        'Content-Type': 'application/json'

      }
    })
    const json = await response.json()

    if(!response.ok){
      setError(json.error)
    }
    if(response.ok){
      setTitle('')
      setContent('')
      setError(null)
      console.log('New Blog added', json)
    }
  }

  return (  
    <Form className= 'create' onSubmit= {handleSubmit}>
      <h3> CREATE A NEW BLOG</h3>

      <label> Blog Title</label>

      <input onChange = {(e)=>
      setTitle(e.target.value)} value= {title}/>

       <label> Blog Content</label>

      <text onChange = {(e)=>
      setContent(e.target.value)} value= {title}/>

      
        <button> Add Blog</button>
    </Form>

  );
}
 
export default Form;