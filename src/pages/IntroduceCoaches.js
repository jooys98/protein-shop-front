import React from 'react'
import trainersData from '../data/trainersData'
import { Link } from 'react-router-dom'
import Category from '../components/Category'

const IntroduceCoaches = () => {
  return (
    <div>
       <Category/>
    <h1>Meet Our Coaches</h1>
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      {trainersData.map((trainer) => (
        <div
          key={trainer.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "10px",
            textAlign: "center",
            width: "200px",
          }}
        >
            <Link to={`/trainer/${trainer.id}`}>
          <img
            src={trainer.imageUrl}
            style={{
              width: "100%",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
          <div className='text-hover-effect'>
          <h2>{trainer.name}</h2>
          <p>{trainer.massage}</p>
          </div>
          </Link>
        </div>
      ))}
    </div>
  </div>
  )
}

export default IntroduceCoaches
