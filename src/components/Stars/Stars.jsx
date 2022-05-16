import React from 'react'
import ReactStars from 'react-rating-stars-component'
function Stars({setRating}) {
  const ratingChanged = (newRating) => {
    setRating(newRating);
  }
  return (
    <div>
      <footer>
      <ReactStars
                style='margin:0 auto'
                count={5}
                onChange={ratingChanged}
                size={24}
               defaultValue={0}
                activeColor="#ffc107"
                />
      </footer>
      
    </div>
  )
}

export default Stars