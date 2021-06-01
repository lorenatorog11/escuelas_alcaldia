import React, {Component} from 'react'
import { Col } from 'react-bootstrap'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class BtnPlus extends Component {
  render() {
    return (
      <Col className='d-flex justify-content-center align-items-center'>
        <div className='BtnPlus d-flex justify-content-center align-items-center'>
          <FontAwesomeIcon className='faPlusIcon' icon={faPlus} />
        </div>
      </Col>
    );
  }
}

export default BtnPlus;