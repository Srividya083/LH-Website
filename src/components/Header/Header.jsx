import React from 'react'; 
import {Container,Row,Button} from 'reactstrap'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'

const navLinks=[
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '#',
        display: 'About'
    },
    {
        path:'/event',
        display: 'event'
    },
]
const Header=()=>{
    return <header className="header">
        <Container>
            <Row>
                <div className="nav_wrapper d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <img src={logo.png} alt=""/>
                        </div>
                    </div>
            </Row>
        </Container>
     </header>

}
export default Header;