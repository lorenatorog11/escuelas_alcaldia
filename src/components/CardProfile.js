import React, {Component} from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class CardProfile extends Component {

  render (){
		const { name, grupos, text, link } = this.props;
    return (
			<Col className='cardProfile'>
				<Link to={link}>
					<div className='divCardProfile d-flex flex-column justify-content-start align-items-center pt-4'> 
							<img className='imgCardProfile' src={grupos} alt='imgCard' />
							<div className='textCardProfile'>{text}</div>
							<h3 className='nameCard text-uppercase'>{name}</h3>
					</div> 
				</Link>
			</Col>
    );
  }
}

export default CardProfile;