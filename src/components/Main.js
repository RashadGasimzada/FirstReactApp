import React from 'react'
import { Col, Row } from 'reactstrap'

function Main() {
  return (
    <Row>
    <Col
        xs="6">
        <div style={{ margin: "20px" }}>
            <h2>Education</h2>
            <p>Code Academy</p>
            <p>Web development</p>
        </div>

    </Col>
    <Col
        xs="6">
        <div style={{ margin: "20px" }}>
            <h2>Work Experience</h2>
            <p>Ae Union</p>
            <p>Help Desk</p>
        </div>

    </Col>

</Row>
  )
}

export default Main