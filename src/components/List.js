import React, {Component} from 'react'
import { Container, Row, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'


class List extends Component {
  render() {
    const { title, titleTable, usuario } = this.props;
    return (
      <Row className='mt-5'>
        <Container className='divGroupList' fluid>
          <Row className='titleGroupList d-flex justify-content-center align-items-center'>
            <h1 className='text-uppercase m-0'>{ titleTable }</h1>
          </Row>
          <Row className='formList py-2 px-5'>
            <Table className='tableList' responsive>
              <thead>
                <tr>
                  {title.map((value, index) => (
                    <th key={index} className='textTitleList text-uppercase tableListBorder'>{value}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 10 }).map((_, index) => (
                  <tr key={index}>
                    {usuario.map((value, index) => (
                      <td key={index} className='textTitleList text-uppercase tableListBorder'>{value}</td>
                    ))}
                    <td className='textTitleList tableListBorder text-center'><FontAwesomeIcon className='faPencilAlt' icon={faPencilAlt} /></td>
                  </tr>
                ))}
              </tbody>
            </Table>

          </Row>
        </Container>
      </Row>
    );
  }
}

export default List;