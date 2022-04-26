import React from 'react'
import { Col} from 'reactstrap'
import '../assets/scss/LeftSideInfo.scss'
import AboutMe from './AboutMe'
import ProfileImage from './ProfileImage'
import SocialLinks from './SocialLinks'

function LeftSideInfo() {
    return (
        
            
                <Col
                    xs="3"
                    className='gray-col'
                >
                   <ProfileImage/>
                   <AboutMe/>
                   <SocialLinks/>
                </Col>
                
        
        
    )
}

export default LeftSideInfo