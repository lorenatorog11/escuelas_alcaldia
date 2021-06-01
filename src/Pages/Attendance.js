import React, {Component} from 'react'
import { Container, Row } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import FloatMenu from '../components/FloatMenu'
import Filter from '../components/Filter'
import List from '../components/List'
import FormFilterAttendance from '../components/FormFilterAttendance.'
import FormMeeting from '../components/FormMeeting'

class Attendance extends Component {
  render() {
    const titleFilter = 'Filtros de búsqueda de asistencia'
    const titleFilterTwo = 'Encuentros semestre 1 -2021'
    const titleTable = 'Grupos'
    const title = ['año', 'código', 'grupo', 'profesional', 'barrio', 'comuna', 'estado', 'revisar']
    const usuario = ['2019', '579', '7 a 10 años', 'Catalina la profesional', 'Santa cecilia', 'popular', 'activa']
    return (
      <Container className='modifyGroup' fluid>
        <NavBar></NavBar>
        <FloatMenu text='Revisión de asistencia'></FloatMenu>
        <Row className='mt-4 px-5'>
          <Filter titleFilter={titleFilter}>
            <FormFilterAttendance></FormFilterAttendance>
          </Filter> 
          <FormMeeting titleFilterTwo={titleFilterTwo}></FormMeeting>
        </Row>      
        <List title={title} titleTable={titleTable} usuario={usuario}></List>
      </Container>
    );
  }
}

export default Attendance;