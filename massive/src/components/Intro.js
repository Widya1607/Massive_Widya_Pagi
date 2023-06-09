import { Col, Container, Row, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className="intro">
        <Container className="text-white d-flex justify-content-center
        align-items-center">
          <Row>
            <Col>
            <div className="title">TEMUI IDOLA MU DISINI</div>
            <div className="title">AYO BERGABUNG SEKARANG</div>
            <div className="introButton"/>
                <Button></Button>
            </Col>
          </Row>
        </Container>
       </div>
    )
       
   
}


export default Intro;