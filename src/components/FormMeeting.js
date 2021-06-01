import React, {Component} from 'react'
import { Col, Row } from 'react-bootstrap'
import BtnPlus from '../components/BtnPlus'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'

class FormMeeting extends Component {
  render() {
    const {titleFilterTwo} = this.props;
    return (
      <Col className='divGroupFilter col-md-5 col-sm-12 col-4 mx-md-4 mt-3 my-md-0' fluid>
        <Row className='titleGroupFilter d-flex justify-content-center align-items-center'>
          <h1 className='text-uppercase'>{titleFilterTwo}</h1>
        </Row>
        <Row className='formFilterMeeting'>
          <Col className='formMeeting col-sm-4 col-5 m-2'>
            <h3 className='border'>Encuentros: 20</h3>            
            <h3>Eventos: 5</h3>
            <h3 className='mt-sm-4 mt-5'>Linea de entrada: 1</h3>
            <h3>Linea de salida: 1</h3>
          </Col>
          <Col className='col-2 d-flex justify-content-center formMeetingEdit mt-3'><FontAwesomeIcon className='faPencilAlt  mr-1' icon={faPencilAlt} /><h3>Editar</h3></Col>
          <BtnPlus></BtnPlus>
        </Row>
      </Col>
    );
  }
}

export default FormMeeting;