

import React,{useRef} from 'react'
import './search-bar.css'
import { Col ,Form,FormGroup} from "reactstrap";

const SearchBar = () => {
      const dateRef = useRef('')
      const monthRef = useRef('')
      const eventsRef = useRef('')




  return (<Col lg='12'>
    <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
           <FormGroup className='d-flex gap-3 form__group form__group-fast'>
               <span><i class="ri-calendar-schedule-fill"></i></span>
               <div>
                   <h6>Date</h6>
                   <input type="date" placeholder="yyyy-mm-dd" />
               </div>
           </FormGroup>
           <FormGroup className='d-flex gap-3 form__group form__group-fast'>
               <span><i class="ri-calendar-schedule-fill"></i></span>
               <div>
                   <h6>Month</h6>
                   <input type="month" placeholder="month" />
               </div>
           </FormGroup>
           <FormGroup className='d-flex gap-3 form__group form__group-last'>
               <span><i class="ri-calendar-schedule-fill"></i></span>
               <div>
                   <h6>Events Filter:</h6>
                   <select name="events" id="events">
                   <option value="DJ Night">Volvo</option>
                   <option value="Movie Night">Saab</option>
                   <option value="Infinito">Opel</option>
                   </select>
               </div>
           </FormGroup>
           <span className="search__icon" type='submit'>
            <i class="ri-search-line"></i>
           </span>
        </Form>
    </div>
  </Col>
  );
}

export default SearchBar