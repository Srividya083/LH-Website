

import React from 'react'
import './search-bar.css'
import { Col ,Form,FormGroup} from "reactstrap";

const SearchBar = () => {
  return <Col lg='12'>
    <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
           <FormGroup className='d-flex gap-3 form__group form__group-fast'>
               <span><i class="ri-calendar-schedule-fill"></i></span>
               <div>
                   <h6>Date</h6>
                   <input type="date" placeholder="yyyy-mm-dd" />
               </div>
           </FormGroup>
        
        </Form>
    </div>
  </Col>
}

export default SearchBar