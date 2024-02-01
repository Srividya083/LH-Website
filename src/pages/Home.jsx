import React from 'react'
import { Container } from 'reactstrap'
import { Row } from 'reactstrap'
import { Col } from 'reactstrap'

import EventList from '../components/Event Cards/EventList'
import SearchBar from '../shared/SearchBar';


const Home = () => {
  return (
    <>

        { /* Events Cards start*/ }
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='mb-5'>
                        <h2 className='Event-Cards'> Our Events!! </h2>
                    </Col>
                    <EventList />
                    <SearchBar />
                </Row>
            </Container>
        </section>
        { /* Events Cards end*/}

    </>
  )
}

export default Home