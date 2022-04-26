import React from 'react'
import { Col } from 'reactstrap'
import Header from './Header'
import '../assets/scss/RightSideInfo.scss'
import Main from './Main'

function RightSideInfo() {
    return (


        <Col
            xs="9"
            className='hotpink'
            >
            <Header />
            <Main/>
        </Col>



    )
}

export default RightSideInfo