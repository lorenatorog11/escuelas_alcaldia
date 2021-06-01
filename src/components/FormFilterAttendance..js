import React, {Component} from 'react'
import { Form } from 'react-bootstrap'

class FormFilterAttendance extends Component {
  render() {
    return (
      <Form className='col d-flex flex-wrap justify-content-around'>
        <Form.Control className='optionFormFilter widthFormFilterUser' type='number' placeholder='Año'/>
        <Form.Control className='optionFormFilter widthFormFilterUser' type='text' placeholder='Profesional'/>
        <Form.Control className='optionFormFilter widthFormFilterUser' as='select' defaultValue='Código grupo'>
          <option>Código grupo</option>
        </Form.Control>
        <Form.Control className='optionFormFilter widthFormFilterUser' as='select' defaultValue='Rango de edad'>
          <option>Rango de edad</option>
        </Form.Control>
        <Form.Control className='optionFormFilter widthFormFilterUser' as='select' defaultValue='Comuna / Barrio'>
          <option>Comuna / Barrio</option>
        </Form.Control>
        <Form.Control className='optionFormFilter widthFormFilterUser' as='select' defaultValue='Encuentro'>
          <option>Encuentro</option>
        </Form.Control>
      </Form>
    );
  }
}

export default FormFilterAttendance;