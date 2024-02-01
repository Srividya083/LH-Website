import React from 'react'
import EventCard from '../../shared/EventCard'
import eventData from '../../assets/data/events'
import { Col } from 'reactstrap'

const EventList = () => {
  return (
    <>
    {
        eventData?.map(tour=>(
            <Col lg='3' className='mb-4' key={tour.id}><EventCard tour={tour} /></Col>
        ))
    }
    </>
  )
}

export default EventList