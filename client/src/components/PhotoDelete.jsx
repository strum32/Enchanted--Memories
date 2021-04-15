import React from 'react'

export default function PhotoDelete(props) {
  const { photos, handleDelete } = props

  return (
    <div>
      <button onClick={() => handleDelete(photos.id)}>Delete</button>
    </div>
  )
}
