import React, {Component} from 'react'
import { Container, Row } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import FloatMenu from '../components/FloatMenu'
import Filter from '../components/Filter'
import List from '../components/List'
import FormFilterUser from '../components/FormFilterUser'
import BtnPlus from '../components/BtnPlus'

class User extends Component {
  render() {
    const titleFilter = 'Filtros de búsqueda de usuarios'
    const titleTable = 'Usuarios'
    const title = ['rol', 'documento', 'nombre', 'celular', 'correo', 'contraseña', 'editar']
    const usuario = ['Admin', '123456789', 'JUAN PABLO ORTIZ MUÑOZ', '300 1234567', 'correolargo1@correo.com', 'Contraseña1']
    return (
      <Container className='modifyGroup' fluid>
        <NavBar></NavBar>
        <FloatMenu text='Usuarios'></FloatMenu>
        <Row className='mt-4 px-5'>
          <Filter titleFilter={titleFilter}>
            <FormFilterUser></FormFilterUser>
            <BtnPlus></BtnPlus>
          </Filter> 
        </Row>      
        <List title={title} titleTable={ titleTable } usuario={usuario}></List>
      </Container>
    );
  }
}

export default User;