import React from 'react'
import { Col, Row } from 'reactstrap'

function Header() {
    return (
        <Row>
            <Col
                xs="6">
                <div style={{ margin: "20px" }}>
                    <h1>Rashad</h1>
                    <h1>Gasimzada</h1>
                    <p>Web Developer</p>
                </div>

            </Col>
            <Col
                xs="6">
                <div style={{ margin: "20px" }}>
                    <p className='mt-5'>+994773330198</p>
                    <p>gasimzadarashad@gmail.com</p>
                </div>

            </Col>

        </Row>
    )
}

export default Header