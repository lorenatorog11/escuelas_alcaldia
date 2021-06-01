import React, {Component} from 'react'
import { Form } from 'react-bootstrap'

class FormFilter extends Component {
  render() {
    return (
      <Form className='col-sm-9 col-10 d-flex flex-wrap justify-content-around'>
        <Form.Control className='optionFormFilter widthFormFilter' type='number' placeholder='Año'/>
        <Form.Control className='optionFormFilter widthFormFilter' type='text' placeholder='Profesional'/>
        <Form.Control className='optionFormFilter widthFormFilter' as="select" defaultValue="Comuna/Barrio">
          <option>Comuna/Barrio</option>
        </Form.Control>
        <Form.Control className='optionFormFilter widthFormFilter' as="select" defaultValue="Código grupo">
          <option>Código grupo</option>
        </Form.Control>        
        <Form.Control className='optionFormFilter widthFormFilter' as="select" defaultValue="Rango de edad">
          <option>Rango de edad</option>
        </Form.Control>        
        <Form.Control className='optionFormFilter widthFormFilter' as="select" defaultValue="Recurso">
          <option>Recurso</option>
        </Form.Control>
      </Form>
    );
  }
}

export default FormFilter;