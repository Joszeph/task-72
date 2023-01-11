import React from 'react'

 const Tags = ({tags}) => {

  return (
    <div>
        <div className='tags'>
            {tags.map(tag=>(
                <div key={tag} className='tag'>#{tag}</div>
            ))}
        </div>
    </div>
  )
}

export default Tags
