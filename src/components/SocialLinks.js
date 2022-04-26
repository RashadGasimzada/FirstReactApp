import React from 'react'
import '../assets/scss/SocialLinks.scss'

function SocialLinks(props) {
    const socialLinks = ['facebook.com/gasimzada','behance.com/gasimzada','twitter.com/gasimzada'];
  return (
    <div className='social-box'>
        <h3 className='social-heading'>Website and Social Links</h3>
        {
          socialLinks.map(socialLink=>(
            <p className='social-text'>{socialLink}</p>
          ))

          
        }
    </div>
  )
}

export default SocialLinks