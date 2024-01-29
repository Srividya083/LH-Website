

import React from 'react'
import './search-bar.css'
import { Col ,Form,FormGroup} from "reactstrap";

const SearchBar = () => {
  return <Col lg='12'>
    <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
           <FormGroup className='d-flex gap-3 form__group form__group-fast'>
               <span><i class="ri-map-pin-line"></i></span>
               <div>
                   <h6>Hostel</h6>
                   <input type="text" placeholder="location of the places"/>
               </div>
           </FormGroup>
        
        </Form>
    </div>
  </Col>
}

export default SearchBar