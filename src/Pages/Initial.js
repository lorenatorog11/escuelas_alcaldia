import React, {Component} from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import alcaldia_medellin from '../imagesPage/alcaldia_medellin.png' 
import { Link } from 'react-router-dom'

class Initial extends Component {

  render (){
    return (
      <Container className='initialPage d-flex justify-content-end' fluid>
        <Row className='initialForm'>
          <Col className='d-flex align-items-center'>
            <Form>
              <Row className='title'>
                <img src={alcaldia_medellin} alt='logo_alcaldia_medellin' className='logoMedellin'/>
                <h1 className='fontTittle text-uppercase tittleForm'>Escuelas de Formación ciudadana para la participación democrática</h1>
              </Row>
              <Row className='form d-flex justify-content-center'>
                <Form.Control className='fontTittleTwo colorGray textCenter inputFormInitial' type='number' placeholder='Número de identificación'/>
              </Row>
              <Row className='form d-flex justify-content-center'>
                <Form.Control className='fontTittleTwo colorGray textCenter inputFormInitial' type='password' placeholder='Contraseña' />
              </Row>
              <Row className='form d-flex justify-content-center'>
                <Link to='/perfiles'>
                  <Button type='submit' className='btnFormInicial text-white colorBlueTwo fontOne text-uppercase'>
                    Ingresar
                  </Button>
                </Link>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>      
    );
  }
}

export default Initial;