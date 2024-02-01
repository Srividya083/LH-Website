import React from 'react'; 
import {Container,Row,Button} from 'reactstrap'
import {Link,NavLink} from 'react-router-dom'
import logo from '../../assets/images/lhsc.png'

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
                    <div className="navigation">
                        <ul className="menu d-flex align-items-center gap-5">
                            {
                                navLinks.map((item,index)=>(
                                    <li className="nav_item" key={index}>
                                        <NavLink to={item.path}>{item.display}</NavLink>
                                    </li>
                                ))
                            }
                            </ul>
                        </div>
                    </div>
            </Row>
        </Container>
     </header>

}
export default Header;