import React, {Component} from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import alcaldia_medellin from '../imagesPage/alcaldia_medellin.png' 
import cerrar_sesion from '../imagesPage/cerrar_sesion.png' 

class NavBar extends Component {
  render (){
    return (
      <Row className='navBar d-flex justify-content-center'>
        <Col className='col-1'>
          <img src={alcaldia_medellin} alt='logo_alcaldia_medellin' className='navBarlogoMedellin'/>
        </Col>
        <Col className='col-md-8 col-9 h-100  d-flex align-items-center'>
          <h2 className='titleNavBar fontTittleThree text-uppercase'>Escuelas de Formación ciudadana para la participación democrática</h2>
        </Col>
        <Col className='col-md-3 col-2 d-flex justify-content-end align-items-start'>
          <div className='mr-3 d-flex flex-column justify-content-center align-items-start h-100 '>
            <h3 className='nameNavBar text-uppercase fontTittleFour'>Angélica maria Marulanda</h3>
            <h4 className='fontTittleFive'>Admin</h4>
          </div>
          <Link to="/">
            <img src={cerrar_sesion} alt='logo_cerrar_sesion' className='navBarClose'/>
          </Link>          
        </Col>
      </Row>    
    );
  }
}

export default NavBar;