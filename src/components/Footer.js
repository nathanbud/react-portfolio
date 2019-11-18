import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Footer(){
    return(
        <footer>
            <Container fluid='true' >
                <Row className='border-top justify-content-between p-3'>
                    <Col className='p-0' md={3} sm='{12}'>
                        <p>Copyright 2019</p>
                    </Col>
                    <Col className='p-0 d-flex justify-content-end'  md={3}>
                        <p>All right reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer