import React, {Component} from 'react'
import { Row } from 'react-bootstrap'
import menu_close from '../imagesPage/menu_close.png'

class FloatMenu extends Component {
  render (){
		const { text } = this.props;
    return (
			<Row className='floatMenu mt-2'>
				<div className='divFloatMenu d-flex justify-content-center align-items-center'> 
					<img src={menu_close} alt='menu close'/>
				</div>
				<div className='textFloatMenu d-flex justify-content-start align-items-center ml-3'> 
					<h1 className='text-uppercase m-0'>{ text }</h1>
				</div>
			</Row>     
    );
  }
}

export default FloatMenu;