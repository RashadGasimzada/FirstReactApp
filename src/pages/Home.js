import React from 'react'
import { Row } from 'reactstrap'
import '../components/LeftSideInfo'
import LeftSideInfo from '../components/LeftSideInfo'
import RightSideInfo from '../components/RightSideInfo'
import '../assets/scss/Home.scss'

function Home() {
  return (
    <Row>
        <LeftSideInfo/>
        <RightSideInfo/>
    </Row>
  )
}

export default Home