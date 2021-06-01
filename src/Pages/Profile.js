import React, {Component} from 'react'
import { Container, Row } from 'react-bootstrap'
import NavBar from '../components/NavBar'
import FloatMenu from '../components/FloatMenu'
import CardProfile from '../components/CardProfile'
import background_profile from '../imagesPage/background_profile.png'
import grupos from '../imagesPage/grupos.png'
import check_list from '../imagesPage/check_list.png'
import informes from '../imagesPage/informes.png'

class Profile extends Component {

  render (){

    const text1 = 'Crea y actualiza grupos según comuna o profesional y asignalos';
    const text2 = 'Ingresa número de encuentros y revisa las asistencias cargadas';
    const text3 = 'Visualiza informes detallados por comunas, escuelas, fechas o generales';
    const text4 = 'Busca, edita o ingresa nuevos usuarios al sistema';

    return (
      <Container className='profilePage' fluid>
        <img className='backgroundProfile' src={background_profile} alt='background profile'/>
        <NavBar></NavBar>
        <FloatMenu></FloatMenu>
        <Row className='profiles'>
          <CardProfile name='grupos' grupos={grupos} text={text1} link='/modificar-grupos'></CardProfile>
          <CardProfile name='asistencias y encuentros' grupos={check_list} text={text2} link='/asistencia'></CardProfile>
          <CardProfile name='informes' grupos={informes} text={text3} link='/'></CardProfile>
          <CardProfile name='usuarios' grupos={grupos} text={text4} link='/usuarios'></CardProfile>
        </Row>
      </Container>      
    );
  }
}

export default Profile;