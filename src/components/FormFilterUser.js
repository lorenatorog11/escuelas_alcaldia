import React, {Component} from 'react'
import { Form } from 'react-bootstrap'

class FormFilterUser extends Component {
  render() {
    return (
      <Form className='col-sm-9 col-10 d-flex flex-wrap justify-content-around'>
        <Form.Control className='optionFormFilter widthFormFilterUser' type='text' placeholder='Nombre'/>
        <Form.Control className='optionFormFilter widthFormFilterUser' type='text' placeholder='Apellido'/>
        <Form.Control className='optionFormFilter widthFormFilterUser' type='number' placeholder='Documento'/>
        <Form.Control className='optionFormFilter widthFormFilterUser' as='select' defaultValue='Rol'>
          <option>Rol</option>
        </Form.Control>
      </Form>
    );
  }
}

export default FormFilterUser;