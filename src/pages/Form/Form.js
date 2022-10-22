import { useState } from 'react'
import './form.css'

const WorkoutForm = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const workout = {title, desc}
    
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setDesc('')
      console.log('new workout added:', json)
    }

  }

  return (
    <form className="create" onSubmit={handleSubmit}> 
      <h3>Add New Post</h3>

      <label>Post Title Title:</label>
      <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
      />

      <label>Description:</label>
      <textarea 
        type="text" 
        onChange={(e) => setDesc(e.target.value)} 
        value={desc}
      />
      {/* <label>Image:</label>
      <input 
        type="file" 
        onChange={(e) => setImage(e.target.value)} 
        value={file}
      /> */}

      <button>Add Post</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default WorkoutForm