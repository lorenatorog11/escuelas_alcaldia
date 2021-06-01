import React, {Component} from 'react'
import { Container, Row } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import FloatMenu from '../components/FloatMenu'
import Filter from '../components/Filter'
import List from '../components/List'
import FormFilter from '../components/FormFilter'
import BtnPlus from '../components/BtnPlus'

class ModifyGroup extends Component {
  render() {
    const titleFilter = 'Filtros de búsqueda de grupos'
    const titleTable = 'Grupos'
    const title = ['año', 'grupo', 'rango de edad', 'profesional', 'barrio', 'comuna', 'recurso','editar']
    const usuario = ['2019', '759', '7 a 10 años', 'Catalina La Profesional', 'Santa Cecilia', 'popular', 'ordinario']
    return (
      <Container className='modifyGroup' fluid>
        <NavBar></NavBar>
        <FloatMenu text='Crear / Modificar grupos'></FloatMenu>
        <Row className='mt-4 px-5'>
          <Filter titleFilter={titleFilter}>
            <FormFilter></FormFilter>
            <BtnPlus></BtnPlus>
          </Filter>  
        </Row>     
        <List title={title} titleTable={ titleTable } usuario={usuario}></List>
      </Container>
    );
  }
}

export default ModifyGroup;