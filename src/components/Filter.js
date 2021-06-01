import React, {Component} from 'react'
import { Row, Col } from 'react-bootstrap'

class Filter extends Component {
  render() {
    const {children, titleFilter} =this.props;
    return (      
      <Col className='divGroupFilter' fluid>
        <Row className='titleGroupFilter d-flex justify-content-center align-items-center'>
          <h1 className='text-uppercase'>{titleFilter}</h1>
        </Row>
        <Row className='formFilter'>
          {children}
        </Row>
      </Col>
    );
  }
}

export default Filter;