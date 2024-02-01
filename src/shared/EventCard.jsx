import React from 'react'
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom'

const EventCard = ({tour}) => {
  
  const {id, title, city, photo, price, featured, avgRating, reviews } = tour
  
  return (
    <div className='tour__card'>
      <Card>
        <div className='tour__img'>
          <img src={photo} alt="event-img"/>
        </div>
      </Card>

      <CardBody>
        <div className='card__top d-flex align-items-center justify-content-between'>
          <span className='tour__location d-flex align-items-center gap-1'>
          <i class="ri-calendar-event-fill"></i> {city}
          </span>
          <span className='tour__rating d-flex align-items-center gap-1'>
          <i class="ri-star-s-fill"></i> {avgRating} {" "}
          <span>({reviews.length})</span>
          </span>
        </div>

        <h5 className='tour__title'><Link to={'/tours/${'}>{title}</Link></h5>

        <div className='card___bottom d-flex align-items-center justify-content-between mt-3'>
        </div>
      </CardBody>
    </div>
  )
}

export default EventCard