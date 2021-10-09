import React from 'react'
import { Link } from 'react-router-dom'

const CatComponent = ({cat}) => {
  return (
    <Link to={`/cat/${cat.id}`} key={cat.id}>
      <div className="cats_item">
        <img src={cat.url} alt="" />
      </div>
    </Link>
  )
}

export default CatComponent
